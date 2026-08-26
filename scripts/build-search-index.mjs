/**
 * Build a static client-side search index (static/search-index.json)
 * used as fallback when Algolia DocSearch is unavailable.
 *
 * Decision (issue #247): library = MiniSearch (~7KB gzipped, lazy-loaded
 * only when the fallback opens); index source = docs/, tutorial/ and blog/
 * markdown parsed at authoring time into title + excerpt + url.
 *
 * Regenerate with: yarn build:search-index
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOTS = ['docs', 'tutorial', 'blog'];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (/\.mdx?$/.test(entry.name)) out.push(p);
  }
  return out;
}

function parseFrontmatter(src) {
  const match = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { meta: {}, body: src };
  const meta = {};
  for (const m of match[1].matchAll(/^(title|slug|description|id):\s*(.+)$/gm)) {
    meta[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
  return { meta, body: src.slice(match[0].length) };
}

function toExcerpt(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')      // fenced code
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[A-Za-z][^>]*>/g, ' ')     // JSX / HTML tags
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`~>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220);
}

function docUrl(file, meta) {
  let dir = relative('.', file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
  const base = dir.split('/').pop().toLowerCase();
  if (base === 'index' || base === 'readme') {
    dir = dir.split('/').slice(0, -1).join('/');
  }
  if (meta.slug) {
    if (meta.slug.startsWith('http')) return null;
    // slug may be relative or absolute
    dir = meta.slug.startsWith('/') ? meta.slug : join(dir.split('/').slice(0, -1).join('/'), meta.slug);
  }
  return '/' + dir.replace(/^\//, '') + '/';
}

const entries = [];
for (const root of ROOTS) {
  let files;
  try {
    files = walk(root);
  } catch {
    continue; // root missing (e.g. no blog dir)
  }
  for (const file of files) {
    if (/^_/.test(file.split('/').pop())) continue; // _-prefixed excluded
    const src = readFileSync(file, 'utf8');
    const { meta, body } = parseFrontmatter(src);
    const title = meta.title || body.match(/^#\s+(.+)$/m)?.[1] || file;
    const url = docUrl(file, meta);
    if (!url) continue;
    entries.push({
      id: url,
      title: String(title),
      excerpt: meta.description || toExcerpt(body),
      section: root,
      url,
    });
  }
}

entries.sort((a, b) => a.url.localeCompare(b.url));
writeFileSync('./static/search-index.json', JSON.stringify(entries));
console.log(`search-index.json written: ${entries.length} documents`);
