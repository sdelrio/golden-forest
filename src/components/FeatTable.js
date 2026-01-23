import React, { useContext } from 'react';
import { FeatFilterContext } from './FeatBrowser';
import styles from './Feat.module.css';

export default function FeatTable({ category }) {
    const { allFeats, filterState } = useContext(FeatFilterContext);

    // Filter feats by category and by active filters
    const filteredFeats = allFeats.filter(feat => {
        // 1. Category Filter
        let categoryMatch = false;
        if (category === 'Origin') categoryMatch = feat.level < 4;
        else if (category === 'General') categoryMatch = feat.level >= 4 && feat.level < 19;
        else if (category === 'L19') categoryMatch = feat.level === 19;
        else if (category === 'L21') categoryMatch = feat.level === 21;

        if (!categoryMatch) return false;

        // 2. Level Filter (match Feat.js logic)
        if (filterState.maxLevel === 0 && feat.level > 0) return false;
        if (filterState.maxLevel === 4 && (feat.level > 4 || feat.level < 4)) return false;
        if (filterState.maxLevel === 19 && (feat.level < 19 || feat.level > 19)) return false;
        if (filterState.maxLevel === 21 && (feat.level < 21 || feat.level > 21)) return false;

        // 3. Ability Filter
        if (filterState.selectedAbility !== 'All') {
            if (!feat.abilityIncrease.length) return false;
            const hasAbilityMatch = feat.abilityIncrease.some(stat => {
                if (!stat) return false;
                if (stat === filterState.selectedAbility) return true;
                if (stat.includes(filterState.selectedAbility)) return true;
                if (stat === 'Any' || stat === 'Choice') return true;
                return false;
            });
            if (!hasAbilityMatch) return false;
        }

        // 4. Book Filter
        if (filterState.selectedBook !== 'All') {
            const bookName = feat.book ? feat.book.toLowerCase() : '';
            if (filterState.selectedBook === "Player's Handbook") {
                if (bookName !== 'phb' && bookName !== 'phb2024') return false;
            } else if (filterState.selectedBook === "Heroes of Faerûn") {
                if (bookName !== 'hof' && bookName !== 'hof2024') return false;
            } else if (filterState.selectedBook === "Fifth Edition Feats") {
                if (bookName !== 'fef') return false;
            } else if (filterState.selectedBook === "Unknown") {
                if (bookName !== 'unknown') return false;
            } else if (filterState.selectedBook === "Epic Characters & Heroes Handbook") {
                if (bookName !== 'echh') return false;
            } else {
                if (feat.book !== filterState.selectedBook) return false;
            }
        }

        return true;
    });

    if (filteredFeats.length === 0) return null;

    return (
        <div className={styles.summaryGrid}>
            {filteredFeats.map((feat) => (
                <div key={feat.id} className={styles.gridItem}>
                    <a href={`#${feat.id}`}>{feat.name}</a>
                </div>
            ))}
        </div>
    );
}
