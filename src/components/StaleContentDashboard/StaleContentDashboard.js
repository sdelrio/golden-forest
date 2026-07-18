import React, { useState, useEffect, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useSearchFilter from '../../hooks/useSearchFilter';
import FreshnessBadge from '../FreshnessBadge/FreshnessBadge';
import { timeAgo } from '../../utils/format';
import styles from './StaleContentDashboard.module.css';

const CATEGORIES = ['all', 'fresh', 'stale', 'outdated'];

function getFreshnessLevel(days) {
  if (days < 60) return 'fresh';
  if (days <= 180) return 'stale';
  return 'outdated';
}

function getDaysSince(dateStr) {
  if (!dateStr) return null;
  return Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
}

function StatCard({ label, count, level }) {
  return (
    <div className={`${styles.statCard} ${styles[level] || ''}`}>
      <span className={styles.statCount}>{count}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function StaleContentDashboard() {
  const freshnessUrl = useBaseUrl('/freshness-index/freshness-index.json');
  const [sortKey, setSortKey] = useState('lastUpdated');
  const [sortAsc, setSortAsc] = useState(true);

  const filterFn = useMemo(() => {
    return (item, searchText, selectedCategory) => {
      const matchesSearch =
        !searchText ||
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchText.toLowerCase()));

      const days = getDaysSince(item.lastUpdated);
      const level = days !== null ? getFreshnessLevel(days) : 'outdated';
      const matchesCategory = selectedCategory === 'all' || selectedCategory === level;

      return matchesSearch && matchesCategory;
    };
  }, []);

  const {
    items,
    filtered,
    counts,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    error,
  } = useSearchFilter({
    url: freshnessUrl,
    filterFn,
    categoryKey: (item) => {
      const days = getDaysSince(item.lastUpdated);
      return days !== null ? getFreshnessLevel(days) : 'outdated';
    },
  });

  const stats = useMemo(() => {
    const s = { fresh: 0, stale: 0, outdated: 0 };
    items.forEach((item) => {
      const days = getDaysSince(item.lastUpdated);
      if (days !== null) {
        s[getFreshnessLevel(days)]++;
      }
    });
    return s;
  }, [items]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'lastUpdated') {
        cmp = new Date(a.lastUpdated) - new Date(b.lastUpdated);
      } else if (sortKey === 'title') {
        cmp = a.title.localeCompare(b.title);
      } else if (sortKey === 'freshness') {
        cmp = getDaysSince(a.lastUpdated) - getDaysSince(b.lastUpdated);
      }
      return sortAsc ? cmp : -cmp;
    });
    return arr;
  }, [filtered, sortKey, sortAsc]);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortIndicator = (key) => {
    if (sortKey !== key) return '';
    return sortAsc ? ' \u2191' : ' \u2193';
  };

  if (error) {
    return <div className={styles.error}>Failed to load freshness data: {error}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Content Freshness</h1>
      <p className={styles.subtitle}>
        Docs with <code>last_updated</code> frontmatter. Sorted oldest-first by default.
      </p>

      <div className={styles.statsRow}>
        <StatCard label="Fresh" count={stats.fresh} level="fresh" />
        <StatCard label="Stale" count={stats.stale} level="stale" />
        <StatCard label="Outdated" count={stats.outdated} level="outdated" />
      </div>

      <div className={styles.filters}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search title, description, tags..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All levels' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              {counts[cat] != null ? ` (${counts[cat]})` : ''}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thSortable} onClick={() => toggleSort('title')}>
                  Title{sortIndicator('title')}
                </th>
                <th className={styles.thSortable} onClick={() => toggleSort('lastUpdated')}>
                  Last Updated{sortIndicator('lastUpdated')}
                </th>
                <th>Age</th>
                <th className={styles.thSortable} onClick={() => toggleSort('freshness')}>
                  Freshness{sortIndicator('freshness')}
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={4} className={styles.emptyRow}>
                    No docs match the current filters.
                  </td>
                </tr>
              )}
              {sorted.map((doc) => {
                const days = getDaysSince(doc.lastUpdated);
                return (
                  <tr key={doc.id}>
                    <td>
                      <a href={doc.permalink} className={styles.docLink}>
                        {doc.title}
                      </a>
                      {doc.description && (
                        <span className={styles.description}>{doc.description}</span>
                      )}
                    </td>
                    <td className={styles.dateCell}>{doc.lastUpdated}</td>
                    <td className={styles.ageCell}>{days !== null ? timeAgo(doc.lastUpdated) : '—'}</td>
                    <td>
                      <FreshnessBadge lastUpdated={doc.lastUpdated} showSuggestUpdate={false} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className={styles.footer}>
        {filtered.length} of {items.length} docs shown. Build index with <code>make freshness-index</code>.
      </p>
    </div>
  );
}
