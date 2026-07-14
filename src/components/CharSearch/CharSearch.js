import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Skeleton } from 'boneyard-js/react';
import XmlChar from '../XmlChar/XmlChar';
import charSearchCardBones from '../../bones/char-search-card.bones.json';
import styles from './CharSearch.module.css';
import clsx from 'clsx';

function stripAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const DEFAULT_CLASSES = [
    'All',
    'Anti Paladin',
    'Barbarian',
    'Bard',
    'Blood Hunter',
    'Cleric',
    'Druid',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Rogue',
    'Sorcerer',
    'Warlock',
    'Wizard',
];

function CharSearchInternal() {
    const [index, setIndex] = useState(null);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [selectedClass, setSelectedClass] = useState('All');
    const [selectedChar, setSelectedChar] = useState(null);

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
                setError(err.message);
            });
    }, []);

    const filtered = (index || []).filter(ch => {
        const matchName = !searchText || stripAccents(ch.name.toLowerCase()).includes(stripAccents(searchText.toLowerCase()));
        const matchClass = selectedClass === 'All' || ch.classes.includes(selectedClass);
        return matchName && matchClass;
    });

    const handleSelectChar = (char) => {
        setSelectedChar(char);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (error) {
        return <div className={styles.error}>Error loading characters: {error}</div>;
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
                            <Skeleton
                                name="char-search-card"
                                loading={true}
                                initialBones={charSearchCardBones}
                                color="rgba(88,24,13,0.08)"
                                darkColor="rgba(255,182,48,0.08)"
                                animate="shimmer"
                            >
                                <div style={{ height: charSearchCardBones.height }} />
                            </Skeleton>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
        <div className={styles.container}>

            {/* Search and filter toolbar */}
            <div className={styles.toolbar}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className={clsx(styles.searchInput, selectedChar && styles.hiddenWhenSelected)}
                />
                <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className={clsx(styles.classSelect, selectedChar && styles.hiddenWhenSelected)}
                >
                    {DEFAULT_CLASSES.map((cls) => (
                        <option key={cls} value={cls}>
                            {cls === 'All' ? `All Classes (${index.length})` : cls}
                        </option>
                    ))}
                </select>
                {selectedChar && (
                    <button onClick={() => setSelectedChar(null)} className={styles.backBtn}>
                        &larr; Back to list
                    </button>
                )}
            </div>

            {/* Results count */}
            {!selectedChar && <p className={styles.count}>{filtered.length} character{filtered.length !== 1 ? 's' : ''}</p>}


            {!selectedChar && filtered.map((ch) => (
                <button
                    key={ch.filename}
                    onClick={() => handleSelectChar(ch)}
                    className={styles.card}
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
            {!selectedChar && filtered.length === 0 && searchText && (
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

export default function CharSearch() {
    return (
        <BrowserOnly fallback={
            <div className={styles.container}>
                <div className={styles.toolbar}>
                    <div style={{ flex: 1, height: 38 }} />
                    <div style={{ width: 160, height: 38 }} />
                </div>
                <p className={styles.loading}>Loading character browser...</p>
            </div>
        }>
            {() => <CharSearchInternal />}
        </BrowserOnly>
    );
}
