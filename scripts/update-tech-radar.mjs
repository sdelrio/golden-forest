#!/usr/bin/env node

/**
 * Scans the project and generates static/tech-radar/stack.json
 * with real technology usage data.
 *
 * Usage: node scripts/update-tech-radar.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function loadJson(path) {
  return JSON.parse(readFileSync(resolve(root, path), 'utf-8'));
}

function loadText(path) {
  return readFileSync(resolve(root, path), 'utf-8');
}

function countFiles(pattern) {
  try {
    const out = execSync(
      `find . -name '${pattern}' -not -path '*/node_modules/*' -not -path './.docusaurus/*' -not -path './build/*' | wc -l`,
      { cwd: root, encoding: 'utf-8' }
    );
    return parseInt(out.trim(), 10);
  } catch {
    return 0;
  }
}

function grepCount(pattern, path = 'src') {
  try {
    const out = execSync(
      `grep -r -l '${pattern}' ${path}/ --include='*.js' --include='*.mjs' --include='*.mdx' --include='*.md' 2>/dev/null | wc -l`,
      { cwd: root, encoding: 'utf-8' }
    );
    return parseInt(out.trim(), 10);
  } catch {
    return 0;
  }
}

const pkg = loadJson('package.json');
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
const docusaurusConfig = loadText('docusaurus.config.js');

// Score helpers
function hasDep(name) { return !!deps[name]; }
function depMajor(name) {
  const v = deps[name] || '';
  const m = v.match(/[\^~]?(\d+)\./);
  return m ? parseInt(m[1], 10) : 0;
}

const skills = [
  // ── Frontend ──
  { name: 'React', axis: 'Frontend', current: depMajor('react') >= 19 ? 10 : depMajor('react') >= 18 ? 9 : 7 },
  { name: 'Docusaurus', axis: 'Frontend', current: depMajor('@docusaurus/core') >= 3 ? 10 : depMajor('@docusaurus/core') >= 2 ? 8 : 6 },
  { name: 'MDX', axis: 'Frontend', current: hasDep('@mdx-js/react') ? 9 : 5 },
  { name: 'CSS Modules', axis: 'Frontend', current: Math.min(10, 5 + Math.floor(countFiles('*.module.css') / 5)) },
  { name: 'clsx', axis: 'Frontend', current: hasDep('clsx') ? (grepCount('clsx') > 10 ? 8 : 6) : 1 },
  { name: 'Iconify', axis: 'Frontend', current: hasDep('@iconify/react') ? (grepCount('@iconify/react') > 5 ? 7 : 5) : 1 },

  // ── Languages ──
  { name: 'JavaScript', axis: 'Languages', current: Math.min(10, 7 + Math.floor(countFiles('*.js') / 15)) },
  { name: 'Python', axis: 'Languages', current: Math.min(5, 1 + countFiles('*.py')) },
  { name: 'MDX (Content)', axis: 'Languages', current: Math.min(10, 6 + Math.floor(countFiles('*.mdx') / 20)) },

  // ── DevOps ──
  { name: 'Make', axis: 'DevOps', current: existsSync(resolve(root, 'Makefile')) ? 7 : 2 },
  { name: 'Task', axis: 'DevOps', current: existsSync(resolve(root, 'Taskfile.yml')) ? 8 : 2 },
  { name: 'GitHub Pages', axis: 'DevOps', current: docusaurusConfig.includes('GITHUB_ACTIONS') ? 9 : 4 },
  { name: 'Git', axis: 'DevOps', current: existsSync(resolve(root, '.git')) ? 9 : 1 },

  // ── AI/ML ──
  { name: 'Mermaid', axis: 'AI/ML', current: depMajor('mermaid') >= 11 ? 9 : depMajor('mermaid') >= 10 ? 7 : 5 },
  { name: 'KaTeX', axis: 'AI/ML', current: hasDep('rehype-katex') ? 6 : 1 },
  { name: 'Algolia', axis: 'AI/ML', current: hasDep('@docusaurus/theme-search-algolia') ? 8 : 1 },
  { name: 'Prism', axis: 'AI/ML', current: hasDep('prism-react-renderer') ? 7 : 2 },

  // ── Data ──
  { name: 'JSON', axis: 'Data', current: Math.min(10, 6 + Math.floor(countFiles('*.json') / 5)) },
  { name: 'XML', axis: 'Data', current: Math.min(7, 2 + Math.floor(countFiles('*.xml') / 3)) },
  { name: 'localStorage', axis: 'Data', current: grepCount('localStorage') > 0 ? 5 : 1 },
];

const axes = [...new Set(skills.map((s) => s.axis))];

const curves = [
  {
    label: 'Current',
    values: axes.map((axis) => {
      const group = skills.filter((s) => s.axis === axis);
      return Math.round(group.reduce((sum, s) => sum + s.current, 0) / group.length);
    }),
  },
];

const radarData = {
  title: 'Tech Stack',
  axes,
  curves,
  skills,
};

const outPath = resolve(root, 'static/tech-radar/stack.json');
writeFileSync(outPath, JSON.stringify(radarData, null, 2) + '\n');
console.log(`✓ Written to ${outPath}`);
console.log(`  Axes: ${axes.join(', ')}`);
console.log(`  Skills: ${skills.length}`);
axes.forEach((axis) => {
  const group = skills.filter((s) => s.axis === axis);
  const avg = (group.reduce((sum, s) => sum + s.current, 0) / group.length).toFixed(1);
  console.log(`    ${axis}: ${avg} — ${group.map((s) => `${s.name}=${s.current}`).join(', ')}`);
});
