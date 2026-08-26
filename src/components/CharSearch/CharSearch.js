import React, { useState, useEffect, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SkeletonLoader from '../Shared/SkeletonLoader/SkeletonLoader';
import XmlChar from '../XmlChar/XmlChar';
import CategoryFilter from '../Shared/CategoryFilter/CategoryFilter';
import useSearchFilter from '../../hooks/useSearchFilter';
import charSearchCardBones from '../../bones/char-search-card.bones.json';
import withBrowserOnly from '../../utils/withBrowserOnly';
import styles from './CharSearch.module.css';
import clsx from 'clsx';

function stripAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filterChars(ch, searchText, selectedClass) {
    const matchName =
        !searchText ||
        stripAccents(ch.name.toLowerCase()).includes(stripAccents(searchText.toLowerCase()));
    const matchClass = selectedClass === 'all' || ch.classes.includes(selectedClass);
    return matchName && matchClass;
}

function CharSearchInternal() {
    const [index, setIndex] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [selectedChar, setSelectedChar] = useState(null);
    const [selectedRace, setSelectedRace] = useState('all');
    const [sortKey, setSortKey] = useState('name');

    const charsUrl = useBaseUrl('/fg/chars');

    useEffect(() => {
        fetch(`${charsUrl}/index.json`)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load index: ${res.status}`);
                return res.json();
            })
            .then(data => setIndex(data))
            .catch(err => {
                console.error('Error loading character index:', err);
                setFetchError(err.message);
            });
    }, []);

    const {
        filtered,
        error,
        searchText,
        setSearchText,
        selectedCategory: selectedClass,
        setSelectedCategory: setSelectedClass,
    } = useSearchFilter({
        items: index,
        filterFn: filterChars,
        defaultCategory: 'all',
        external: true,
    });

    const races = useMemo(() => {
        if (!index) return [];
        return Array.from(new Set(index.map((ch) => ch.race).filter(Boolean))).sort((a, b) =>
            a.localeCompare(b),
        );
    }, [index]);

    const classCategories = useMemo(() => {
        if (!index) return [];
        const byClass = {};
        index.forEach((ch) => {
            ch.classes.forEach((cls) => {
                byClass[cls] = (byClass[cls] || 0) + 1;
            });
        });
        return Object.keys(byClass)
            .sort((a, b) => a.localeCompare(b))
            .map((cls) => ({ id: cls, label: cls }));
    }, [index]);

    const classCounts = useMemo(() => {
        const c = { total: index ? index.length : 0 };
        if (!index) return c;
        index.forEach((ch) => {
            ch.classes.forEach((cls) => {
                c[cls] = (c[cls] || 0) + 1;
            });
        });
        return c;
    }, [index]);

    const visible = useMemo(() => {
        const matching = selectedRace === 'all'
            ? filtered
            : filtered.filter((ch) => ch.race === selectedRace);
        if (sortKey === 'level') {
            return [...matching].sort((a, b) => {
                if (a.level == null && b.level == null) return 0;
                if (a.level == null) return 1;
                if (b.level == null) return -1;
                return b.level - a.level;
            });
        }
        return [...matching].sort((a, b) => a.name.localeCompare(b.name));
    }, [filtered, selectedRace, sortKey]);

    const handleSelectChar = (char) => {
        setSelectedChar(char);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (fetchError || error) {
        return <div className={styles.error}>Error loading characters: {fetchError || error}</div>;
    }

    if (!index) {
        return (
            <div className={styles.container}>
                <div className={styles.toolbar}>
                    <div style={{ flex: 1, height: 38 }} />
                    <div style={{ width: 160, height: 38 }} />
                </div>
                <div style={{ margin: '0 0 1rem 0', height: 20 }} />
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={styles.card} style={{ padding: 0, border: 'none', background: 'none' }}>
                        <div style={{ padding: '0.6rem 1rem' }}>
                            <SkeletonLoader
                                name="char-search-card"
                                bones={charSearchCardBones}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
        <div className={styles.container}>

            {/* Search toolbar */}
            <div className={styles.toolbar}>
                <input
                    type="text"
                    aria-label="Search characters by name"
                    placeholder="Search by name..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className={clsx(styles.searchInput, selectedChar && styles.hiddenWhenSelected)}
                />
                <select
                    aria-label="Filter characters by race"
                    value={selectedRace}
                    onChange={(e) => setSelectedRace(e.target.value)}
                    className={clsx(styles.classSelect, selectedChar && styles.hiddenWhenSelected)}
                >
                    <option key="all" value="all">
                        All Races ({index.length})
                    </option>
                    {races.map((race) => (
                        <option key={race} value={race}>
                            {race}
                        </option>
                    ))}
                </select>
                <select
                    aria-label="Sort characters"
                    value={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    className={clsx(styles.classSelect, styles.sortSelect, selectedChar && styles.hiddenWhenSelected)}
                >
                    <option value="name">Sort: Name (A-Z)</option>
                    <option value="level">Sort: Level</option>
                </select>
                {selectedChar && (
                    <button onClick={() => setSelectedChar(null)} className={styles.backBtn}>
                        &larr; Back to list
                    </button>
                )}
            </div>

            {/* Class pills */}
            {!selectedChar && (
                <CategoryFilter
                    categories={[{ id: 'all', label: 'All Classes' }, ...classCategories]}
                    selected={selectedClass}
                    onChange={setSelectedClass}
                    counts={classCounts}
                />
            )}

            {/* Results count */}
            {!selectedChar && <p className={styles.count}>{visible.length} character{visible.length !== 1 ? 's' : ''}</p>}


            {!selectedChar && visible.map((ch) => (
                <button
                    key={ch.filename}
                    onClick={() => handleSelectChar(ch)}
                    className={styles.card}
                    type="button"
                >
                    <div className={styles.cardName}>{ch.name}</div>
                    <div className={styles.cardMeta}>
                        {ch.classes.length > 0
                            ? ch.classes.join(' / ') + (ch.level != null ? ' ' + ch.level : '')
                            : 'No class'}
                        {' · '}
                        <span className={styles.cardRace}>{ch.race || 'Unknown race'}</span>
                    </div>
                </button>
            ))}

            {/* Empty state */}
            {!selectedChar && visible.length === 0 && (
                <p className={styles.empty}>No characters match your filters.</p>
            )}
        </div>

        {selectedChar && (
            <div className={styles.detail}>
                <XmlChar filename={selectedChar.filename} display="large" />
            </div>
        )}
        </>
    );
}

export default withBrowserOnly(CharSearchInternal, {
  fallback: (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <div style={{ flex: 1, height: 38 }} />
        <div style={{ width: 160, height: 38 }} />
      </div>
      <div style={{ margin: '0 0 1rem 0', height: 20 }} />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className={styles.card} style={{ padding: 0, border: 'none', background: 'none' }}>
          <div style={{ padding: '0.6rem 1rem' }}>
            <SkeletonLoader
              name="char-search-card"
              bones={charSearchCardBones}
            />
          </div>
        </div>
      ))}
    </div>
  ),
});
