import React, { useEffect, useRef, useState } from 'react';
import styles from './FallbackSearch.module.css';

/**
 * Client-side fallback search (issue #247).
 *
 * Decision: MiniSearch (~7KB gzipped) lazily imported only when this
 * overlay first opens, over a static index generated at authoring time
 * by scripts/build-search-index.mjs (static/search-index.json:
 * title + excerpt + url for docs/, tutorial/, blog/). Zero impact on
 * the main bundle; used when Algolia DocSearch is unavailable.
 */
export default function FallbackSearch({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const miniSearchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  async function ensureIndex() {
    if (miniSearchRef.current) return miniSearchRef.current;
    const [{ default: MiniSearch }, res] = await Promise.all([
      import('minisearch'),
      fetch('/search-index.json'),
    ]);
    if (!res.ok) throw new Error(`search index HTTP ${res.status}`);
    const docs = await res.json();
    const ms = new MiniSearch({
      fields: ['title', 'excerpt'],
      storeFields: ['title', 'excerpt', 'url', 'section'],
      searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 2 } },
    });
    ms.addAll(docs);
    miniSearchRef.current = ms;
    return ms;
  }

  async function handleChange(e) {
    const q = e.target.value;
    setQuery(q);
    if (q.trim().length < 2) {
      setResults([]);
      return;
    }
    try {
      const ms = await ensureIndex();
      setError(null);
      setResults(ms.search(q).slice(0, 20));
    } catch (err) {
      setError(err.message || 'Failed to load search index');
    }
  }

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Fallback search"
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search pages..."
          value={query}
          onChange={handleChange}
          autoFocus
        />
        {error && <p className={styles.error}>Error: {error}</p>}
        {!error && query.trim().length >= 2 && results.length === 0 && (
          <p className={styles.empty}>No results for "{query}"</p>
        )}
        <ul className={styles.results}>
          {results.map((r) => (
            <li key={r.id}>
              <a href={r.url} className={styles.resultLink} onClick={onClose}>
                <span className={styles.resultTitle}>{r.title}</span>
                <span className={styles.resultExcerpt}>{r.excerpt}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.hint}>Local search - Algolia unavailable. Esc to close.</p>
      </div>
    </div>
  );
}
