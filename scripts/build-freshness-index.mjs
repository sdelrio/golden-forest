#!/usr/bin/env node
/**
 * Build a JSON index of all docs with `last_updated` frontmatter.
 * Scans docs/ for .md and .mdx files, extracts frontmatter, writes JSON.
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, relative, extname, basename } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs');
const OUTPUT_DIR = join(import.meta.dirname, '..', 'static', 'freshness-index');
const OUTPUT_FILE = join(OUTPUT_DIR, 'freshness-index.json');

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n/;

function extractFrontmatter(content) {
  const match = content.match(FRONTMATTER_RE);
  if (!match) return null;
  return match[1];
}

function parseYamlValue(raw) {
  const trimmed = raw.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^-?\d+$/.test(trimmed)) return parseInt(trimmed, 10);
  if (/^-?\d+\.\d+$/.test(trimmed)) return parseFloat(trimmed);
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith('[')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      // Handle YAML-style unquoted inline arrays: [ai, tools, memory]
      const inner = trimmed.slice(1, -1).trim();
      if (!inner) return [];
      return inner.split(',').map((s) => s.trim().replace(/^["']|["']$/g, ''));
    }
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  const result = {};
  let currentKey = null;
  let currentValue = [];
  let inMultiline = false;

  for (const line of raw.split('\n')) {
    const kvMatch = line.match(/^(\w[\w_-]*)\s*:\s*(.*)/);

    if (kvMatch && !inMultiline) {
      if (currentKey) {
        result[currentKey] = parseYamlValue(currentValue.join('\n'));
      }
      currentKey = kvMatch[1];
      const val = kvMatch[2].trim();
      if (val === '' || val === '|' || val === '>') {
        inMultiline = true;
        currentValue = [];
      } else {
        inMultiline = false;
        currentValue = [val];
        result[currentKey] = parseYamlValue(val);
        currentKey = null;
      }
    } else if (inMultiline) {
      if (line.trim() === '' && currentValue.length === 0) continue;
      currentValue.push(line);
    }
  }

  if (currentKey) {
    result[currentKey] = parseYamlValue(currentValue.join('\n'));
  }

  return result;
}

function walkDir(dir, extensions) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath, extensions));
    } else if (extensions.includes(extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function computePermalink(filePath) {
  const rel = relative(DOCS_DIR, filePath);
  const name = basename(filePath).replace(/\.(md|mdx)$/, '');
  const dir = join('docs', rel.replace(/\.(md|mdx)$/, ''));
  if (name === 'index') {
    return '/' + dir.replace(/\/index$/, '/') ;
  }
  return '/' + dir.replace(/\.(md|mdx)$/, '/');
}

function main() {
  const mdFiles = walkDir(DOCS_DIR, ['.md', '.mdx']);
  const index = [];

  for (const filePath of mdFiles) {
    const content = readFileSync(filePath, 'utf-8');
    const rawFm = extractFrontmatter(content);
    if (!rawFm) continue;

    const fm = parseFrontmatter(rawFm);
    if (!fm.last_updated && !fm.lastUpdated) continue;

    const lastUpdated = fm.last_updated || fm.lastUpdated;
    const relPath = relative(join(import.meta.dirname, '..'), filePath);
    const name = basename(filePath).replace(/\.(md|mdx)$/, '');

    index.push({
      id: relPath.replace(/\.(md|mdx)$/, '').replace(/^docs\//, ''),
      title: fm.title || name,
      permalink: computePermalink(filePath),
      lastUpdated: typeof lastUpdated === 'string' ? lastUpdated : String(lastUpdated),
      description: fm.description || '',
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      sourceFile: relPath,
    });
  }

  index.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));

  writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2) + '\n');
  console.log(`Indexed ${index.length} docs with last_updated to ${OUTPUT_FILE}`);
}

main();
