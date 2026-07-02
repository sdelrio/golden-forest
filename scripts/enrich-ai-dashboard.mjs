#!/usr/bin/env node

/**
 * Enriches static/ai-dashboard/tools.json with live data from npm and GitHub APIs.
 * Outputs static/ai-dashboard/tools-enriched.json
 *
 * Usage:
 *   node scripts/enrich-ai-dashboard.mjs           # uses cache if <24h old
 *   node scripts/enrich-ai-dashboard.mjs --force   # bypass cache
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INPUT = resolve(ROOT, 'static/ai-dashboard/tools.json');
const OUTPUT = resolve(ROOT, 'static/ai-dashboard/tools-enriched.json');
const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

const FORCE = process.argv.includes('--force');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchNpmJSON(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ─── GitHub via gh CLI ───────────────────────────────────────────────────────

async function ghApi(args) {
  try {
    const { stdout } = await execFileAsync('gh', ['api', ...args], {
      maxBuffer: 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}

async function ghGraphQL(query) {
  try {
    const { stdout } = await execFileAsync('gh', ['api', 'graphql', '-f', `query=${query}`], {
      maxBuffer: 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (err) {
    // gh exits non-zero on GraphQL errors, but stdout still has partial data
    if (err.stdout) {
      try { return JSON.parse(err.stdout); } catch { /* fall through */ }
    }
    console.warn(`  gh api graphql error: ${err.message}`);
    return null;
  }
}

// ─── GitHub GraphQL batching ─────────────────────────────────────────────────

function buildGitHubGraphQuery(repos) {
  const fragments = repos.map((r, i) =>
    `repo${i}: repository(owner: "${r.owner}", name: "${r.repo}") { stargazerCount pushedAt isArchived issues(states: OPEN) { totalCount } primaryLanguage { name } }`
  );
  return `{ ${fragments.join(' ')} }`;
}

async function fetchGitHubBatch(repos) {
  // Check if gh is authenticated
  try {
    await execFileAsync('gh', ['auth', 'status']);
  } catch {
    console.log('  gh CLI not authenticated, skipping GraphQL');
    return null;
  }

  const results = {};
  const BATCH_SIZE = 10;

  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);
    const query = buildGitHubGraphQuery(batch);

    const json = await ghGraphQL(query);
    if (!json) {
      console.warn(`  GraphQL batch failed, falling back to REST`);
      return null;
    }

    // GraphQL returns partial data even with errors (e.g. repo not found)
    // Extract whatever data we got
    batch.forEach((r, idx) => {
      const key = `repo${idx}`;
      const data = json.data?.[key];
      if (data) {
        results[`${r.owner}/${r.repo}`] = {
          githubStars: data.stargazerCount ?? null,
          githubOpenIssues: data.issues?.totalCount ?? null,
          githubArchived: data.isArchived ?? false,
          githubLastPush: data.pushedAt ?? null,
          githubLanguage: data.primaryLanguage?.name ?? null,
        };
      }
    });

    if (i + BATCH_SIZE < repos.length) {
      await sleep(500);
    }
  }

  return results;
}

// ─── GitHub REST fallback ────────────────────────────────────────────────────

async function fetchGitHubREST(owner, repo) {
  const repoData = await ghApi(['repos', `${owner}/${repo}`]);
  if (!repoData) return null;
  return {
    githubStars: repoData.stargazers_count ?? null,
    githubOpenIssues: repoData.open_issues_count ?? null,
    githubArchived: repoData.archived ?? false,
    githubLastPush: repoData.pushed_at ?? null,
    githubLanguage: repoData.language ?? null,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseGitHubUrl(url) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

function computeHealthScore({ githubStars, githubLastPush, githubArchived, npmLastPublished }) {
  let score = 0;
  if (githubLastPush) {
    const daysSince = (Date.now() - new Date(githubLastPush).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < 90) score += 30;
    else if (daysSince < 180) score += 20;
    else if (daysSince < 365) score += 10;
  }
  if (!githubArchived) score += 20;
  if (npmLastPublished) {
    const daysSince = (Date.now() - new Date(npmLastPublished).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < 180) score += 25;
    else if (daysSince < 365) score += 15;
  }
  if (githubStars) {
    const normalized = Math.min(1, Math.log10(githubStars + 1) / Math.log10(10000));
    score += Math.round(normalized * 25);
  }
  return Math.min(100, score);
}

// ─── Main enrichment ─────────────────────────────────────────────────────────

async function enrichTools(tools) {
  const enriched = [];

  const githubRepos = [];
  tools.forEach((tool) => {
    const gh = parseGitHubUrl(tool.github);
    if (gh) githubRepos.push(gh);
  });

  let ghData = {};
  if (githubRepos.length > 0) {
    console.log(`Fetching ${githubRepos.length} GitHub repos via GraphQL...`);
    ghData = await fetchGitHubBatch(githubRepos);
    if (ghData === null) {
      console.log('  Falling back to REST...');
      ghData = {};
      for (const r of githubRepos) {
        const key = `${r.owner}/${r.repo}`;
        console.log(`  REST: ${key}`);
        const result = await fetchGitHubREST(r.owner, r.repo);
        if (result === '__RATE_LIMITED__') {
          console.log('  Stopping GitHub fetches due to rate limit.');
          break;
        }
        ghData[key] = result;
        await sleep(1200);
      }
    } else {
      console.log(`  Got data for ${Object.keys(ghData).length} repos.`);
    }
  }

  for (const tool of tools) {
    const entry = { ...tool };

    if (tool.npm) {
      console.log(`  npm: ${tool.npm}`);
      const pkgData = await fetchNpmJSON(`https://registry.npmjs.org/${tool.npm}`);
      if (pkgData) {
        const latestVersion = pkgData['dist-tags']?.latest;
        entry.npmVersion = latestVersion || null;
        if (latestVersion && pkgData.time?.[latestVersion]) {
          entry.npmLastPublished = pkgData.time[latestVersion];
        }
      }
      await sleep(300);
    }

    const gh = parseGitHubUrl(tool.github);
    if (gh) {
      const key = `${gh.owner}/${gh.repo}`;
      const data = ghData[key];
      if (data != null) Object.assign(entry, data);
    }

    entry.healthScore = computeHealthScore(entry);
    enriched.push(entry);
  }

  return enriched;
}

// ─── Cache logic ─────────────────────────────────────────────────────────────

function readExisting() {
  if (!existsSync(OUTPUT)) return null;
  try {
    return JSON.parse(readFileSync(OUTPUT, 'utf8'));
  } catch {
    return null;
  }
}

function isCacheFresh(existing) {
  if (FORCE || !existing) return false;
  const age = Date.now() - new Date(existing.generatedAt).getTime();
  if (age < CACHE_MAX_AGE_MS) {
    console.log(`Cache is fresh (${Math.round(age / 60000)}min old). Skipping API calls.`);
    return true;
  }
  console.log(`Cache is stale (${Math.round(age / 3600000)}h old). Refreshing...`);
  return false;
}

// Build a lookup from previously enriched data so we can merge stale values
// back for tools where the new fetch failed or was skipped due to rate limits.
function buildPreviousLookup(existing) {
  if (!existing?.tools) return {};
  const lookup = {};
  for (const tool of existing.tools) {
    if (tool.id) lookup[tool.id] = tool;
  }
  return lookup;
}

function mergeWithPrevious(entry, prev) {
  if (!prev) return entry;
  // Carry forward any enriched fields that are missing in the new entry
  const enrichedKeys = [
    'githubStars', 'githubOpenIssues', 'githubArchived',
    'githubLastPush', 'githubLanguage', 'npmVersion', 'npmLastPublished',
  ];
  for (const key of enrichedKeys) {
    if (entry[key] === undefined && prev[key] !== undefined) {
      entry[key] = prev[key];
    }
  }
  return entry;
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function main() {
  const existing = readExisting();

  if (isCacheFresh(existing)) {
    writeFileSync(OUTPUT, JSON.stringify(existing, null, 2));
    console.log(`Wrote ${existing.toolCount} enriched tools from cache to ${OUTPUT}`);
    return;
  }

  const prevLookup = buildPreviousLookup(existing);

  console.log('Reading tools catalog...');
  const tools = JSON.parse(readFileSync(INPUT, 'utf8'));
  console.log(`Found ${tools.length} tools to enrich.\n`);

  const enriched = await enrichTools(tools);

  // Merge back data from previous run for items where fetch was skipped/failed
  const merged = enriched.map((entry) => {
    const merged = mergeWithPrevious(entry, prevLookup[entry.id]);
    // Recompute health score with merged data
    merged.healthScore = computeHealthScore(merged);
    return merged;
  });

  const output = {
    generatedAt: new Date().toISOString(),
    toolCount: merged.length,
    tools: merged,
  };

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
  console.log(`\nDone. Wrote ${merged.length} enriched tools to ${OUTPUT}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
