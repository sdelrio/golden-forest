#!/usr/bin/env node
/**
 * Validate `tags` frontmatter across docs/ against scripts/tags-vocabulary.json.
 * Every article needs 1-4 tags, all from the vocabulary. Exit 1 on any violation.
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DOCS_DIR = join(ROOT, 'docs');
const VOCAB_FILE = join(ROOT, 'scripts', 'tags-vocabulary.json');
const MAX_TAGS = 4;

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

const vocab = JSON.parse(readFileSync(VOCAB_FILE, 'utf8'));
const allowed = new Set([...vocab.topics, ...vocab.tools]);

function parseTags(frontmatter) {
  const inline = frontmatter.match(/^tags:\s*\[(.*)\]\s*$/m);
  if (inline) {
    return inline[1].split(',').map((t) => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  const block = frontmatter.match(/^tags:[ \t]*\r?\n((?:[ \t]*-[ \t]*.+\r?\n?)+)/m);
  if (block) {
    return block[1]
      .split('\n')
      .map((line) => line.replace(/^[ \t]*-[ \t]*/, '').trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return [];
}

function collectDocs(dir) {
  const files = [];
  for (const entry of readdirSync(dir).sort()) {
    if (entry.startsWith('_') || entry === 'node_modules') continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...collectDocs(path));
    else if (/\.(md|mdx)$/.test(entry)) files.push(path);
  }
  return files;
}

const files = collectDocs(DOCS_DIR);
const errors = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const match = readFileSync(file, 'utf8').match(FRONTMATTER_RE);
  if (!match) {
    errors.push(`${rel}: missing frontmatter with tags`);
    continue;
  }
  const tags = parseTags(match[1]);
  if (tags.length === 0) {
    errors.push(`${rel}: no tags`);
    continue;
  }
  if (tags.length > MAX_TAGS) {
    errors.push(`${rel}: ${tags.length} tags (max ${MAX_TAGS}): ${tags.join(', ')}`);
  }
  const seen = new Set();
  for (const tag of tags) {
    if (seen.has(tag)) errors.push(`${rel}: duplicate tag ${tag}`);
    seen.add(tag);
    if (!allowed.has(tag)) errors.push(`${rel}: unknown tag ${tag}`);
  }
}

if (errors.length) {
  for (const error of errors) console.log(error);
  console.log(`\n${errors.length} tag problems in ${files.length} docs articles`);
  process.exit(1);
}

console.log(`${files.length} docs articles, ${allowed.size} allowed tags, all valid`);
