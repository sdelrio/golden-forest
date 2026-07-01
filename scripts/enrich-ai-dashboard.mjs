#!/usr/bin/env node

/**
 * Enriches static/ai-dashboard/tools.json with live data from npm and GitHub APIs.
 * Outputs static/ai-dashboard/tools-enriched.json
 *
 * Usage: node scripts/enrich-ai-dashboard.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INPUT = resolve(ROOT, 'static/ai-dashboard/tools.json');
const OUTPUT = resolve(ROOT, 'static/ai-dashboard/tools-enriched.json');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchJSON(url) {
  try {
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function parseGitHubUrl(url) {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

function computeHealthScore({ githubStars, githubLastPush, githubArchived, npmLastPublished }) {
  let score = 0;

  // Recent push (within 90 days) = 30 pts
  if (githubLastPush) {
    const daysSince = (Date.now() - new Date(githubLastPush).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < 90) score += 30;
    else if (daysSince < 180) score += 20;
    else if (daysSince < 365) score += 10;
  }

  // Not archived = 20 pts
  if (!githubArchived) score += 20;

  // npm published within 180 days = 25 pts
  if (npmLastPublished) {
    const daysSince = (Date.now() - new Date(npmLastPublished).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < 180) score += 25;
    else if (daysSince < 365) score += 15;
  }

  // Stars normalized = 25 pts (10K+ = full, log scale)
  if (githubStars) {
    const normalized = Math.min(1, Math.log10(githubStars + 1) / Math.log10(10000));
    score += Math.round(normalized * 25);
  }

  return Math.min(100, score);
}

async function enrichTools(tools) {
  const enriched = [];

  for (const tool of tools) {
    const entry = { ...tool };

    // Fetch npm data
    if (tool.npm) {
      console.log(`  npm: ${tool.npm}`);
      const npmData = await fetchJSON(`https://registry.npmjs.org/${tool.npm}/latest`);
      if (npmData) {
        entry.npmVersion = npmData.version || null;
        // Get last publish time from time map
        const timeData = await fetchJSON(`https://registry.npmjs.org/${tool.npm}`);
        if (timeData?.time?.[npmData.version]) {
          entry.npmLastPublished = timeData.time[npmData.version];
        }
      }
      await sleep(300);
    }

    // Fetch GitHub data
    const gh = parseGitHubUrl(tool.github);
    if (gh) {
      console.log(`  github: ${gh.owner}/${gh.repo}`);
      const repoData = await fetchJSON(`https://api.github.com/repos/${gh.owner}/${gh.repo}`);
      if (repoData) {
        entry.githubStars = repoData.stargazers_count ?? null;
        entry.githubOpenIssues = repoData.open_issues_count ?? null;
        entry.githubArchived = repoData.archived ?? false;
        entry.githubLastPush = repoData.pushed_at ?? null;
        entry.githubLanguage = repoData.language ?? null;
      }
      await sleep(1200); // GitHub rate limit: 60 req/hr for unauthenticated
    }

    entry.healthScore = computeHealthScore(entry);
    enriched.push(entry);
  }

  return enriched;
}

async function main() {
  console.log('Reading tools catalog...');
  const tools = JSON.parse(readFileSync(INPUT, 'utf8'));
  console.log(`Found ${tools.length} tools to enrich.\n`);

  const enriched = await enrichTools(tools);

  const output = {
    generatedAt: new Date().toISOString(),
    toolCount: enriched.length,
    tools: enriched,
  };

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
  console.log(`\nDone. Wrote ${enriched.length} enriched tools to ${OUTPUT}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
