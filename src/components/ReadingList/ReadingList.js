import React, { useRef } from 'react';
import clsx from 'clsx';
import useReadingList from '../../hooks/useReadingList';
import styles from './ReadingList.module.css';

function ProgressBar({ progress }) {
  return (
    <div className={styles.progressTrack}>
      <div
        className={styles.progressFill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function EntryCard({ entry, onToggleBookmark, onMarkRead, onRemove }) {
  return (
    <div className={clsx(styles.card, entry.read && styles.cardRead)}>
      <div className={styles.cardHeader}>
        <a href={entry.permalink} className={styles.cardTitle}>
          {entry.title}
        </a>
        <span className={styles.cardMeta}>
          {entry.lastUpdated && `Updated ${entry.lastUpdated}`}
        </span>
      </div>
      {entry.description && (
        <p className={styles.cardDesc}>{entry.description}</p>
      )}
      <ProgressBar progress={entry.progress || 0} />
      <div className={styles.cardActions}>
        <button
          type="button"
          className={clsx(styles.actionBtn, entry.bookmarked && styles.actionActive)}
          onClick={() => onToggleBookmark(entry.slug)}
        >
          {entry.bookmarked ? '\u2605 Saved' : '\u2606 Save'}
        </button>
        <button
          type="button"
          className={clsx(styles.actionBtn, entry.read && styles.actionActive)}
          onClick={() => onMarkRead(entry.slug, !entry.read)}
        >
          {entry.read ? '\u2713 Read' : 'Mark Read'}
        </button>
        <button
          type="button"
          className={clsx(styles.actionBtn, styles.removeBtn)}
          onClick={() => onRemove(entry.slug)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function ReadingList() {
  const {
    entries,
    filtered,
    counts,
    loaded,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    toggleBookmark,
    markRead,
    remove,
    exportJSON,
    importJSON,
  } = useReadingList();

  const fileInputRef = useRef(null);

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importJSON(file);
      window.location.reload();
    } catch (err) {
      alert(`Import failed: ${err.message}`);
    }
    e.target.value = '';
  };

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'bookmarked', label: 'Bookmarked' },
    { key: 'read', label: 'Read' },
    { key: 'unread', label: 'Unread' },
  ];

  if (!loaded) {
    return <div className={styles.loading}>Loading reading list...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reading List</h1>
      <p className={styles.subtitle}>
        {entries.length === 0
          ? 'No articles saved yet. Bookmark any doc page to start building your list.'
          : `${entries.length} article${entries.length !== 1 ? 's' : ''} tracked locally.`}
      </p>

      {entries.length > 0 && (
        <>
          <div className={styles.filterBar}>
            {categories.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={clsx(
                  'shared-pill',
                  selectedCategory === key && 'shared-pill-active',
                )}
                onClick={() => setSelectedCategory(key)}
              >
                <span className="shared-pill-label">{label}</span>
                <span className="shared-pill-count">{counts[key] || 0}</span>
              </button>
            ))}
          </div>

          <div className={styles.searchRow}>
            <input
              type="text"
              className="shared-search-input"
              placeholder="Search title or description..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className={styles.actions}>
              <button type="button" className={styles.exportBtn} onClick={exportJSON}>
                Export JSON
              </button>
              <button
                type="button"
                className={styles.exportBtn}
                onClick={() => fileInputRef.current?.click()}
              >
                Import JSON
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </>
      )}

      {entries.length > 0 && filtered.length === 0 && (
        <div className={styles.empty}>No articles match the current filters.</div>
      )}

      <div className={styles.grid}>
        {filtered.map((entry) => (
          <EntryCard
            key={entry.slug}
            entry={entry}
            onToggleBookmark={toggleBookmark}
            onMarkRead={markRead}
            onRemove={remove}
          />
        ))}
      </div>
    </div>
  );
}
