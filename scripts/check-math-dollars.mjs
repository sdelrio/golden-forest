#!/usr/bin/env node
/**
 * Flag prose currency pairs that MDX reads as LaTeX math.
 *
 * remark-math turns two `$` on one line into an equation, so a price like
 * "$42 ... $0.042" silently renders as garbled math. Escape it as `\$42`.
 * Only `$` directly followed by a digit is flagged, so real equations
 * (`$= 0.1s$`, `$$` blocks) stay legal. Exit 1 on any violation.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DEFAULT_DIRS = ['docs', 'tutorial', 'blog'];
const FRONTMATTER_RE = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

const DOLLAR_DIGIT_RE = /(?<!\\)\$(?=\d)/g;

function collect(dir, files = []) {
  for (const entry of readdirSync(dir).sort()) {
    if (entry.startsWith('_') || entry === 'node_modules') continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) collect(path, files);
    else if (/\.mdx?$/.test(entry)) files.push(path);
  }
  return files;
}

function collectAll(target, files = []) {
  const path = join(ROOT, target);
  let stat;
  try {
    stat = statSync(path);
  } catch {
    return files;
  }
  if (stat.isDirectory()) return collect(path, files);
  if (/\.mdx?$/.test(target)) files.push(path);
  return files;
}

const targets = process.argv.slice(2);
const roots = targets.length ? targets : DEFAULT_DIRS;
const files = roots.flatMap((target) => collectAll(target));
const problems = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const body = readFileSync(file, 'utf8').replace(FRONTMATTER_RE, '');
  let inFence = false;
  body.split('\n').forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line) || /^\s*\$\$\s*$/.test(line)) {
      inFence = !inFence;
      return;
    }
    if (inFence) return;
    const prose = line.replace(/`[^`]*`/g, '');
    const hits = prose.match(DOLLAR_DIGIT_RE);
    if (hits && hits.length >= 2) {
      problems.push(`${rel}:${i + 1}: ${hits.length} unescaped $ before a digit, MDX will render this as math`);
    }
  });
}

if (problems.length) {
  for (const problem of problems) console.log(problem);
  console.log(`\n${problems.length} lines need \\$ escaping (or an inline code span) in ${files.length} files`);
  process.exit(1);
}

console.log(`${files.length} files scanned, no math-triggering currency pairs`);
