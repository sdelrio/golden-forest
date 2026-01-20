import React, { useContext } from 'react';
import styles from './Feat.module.css';
import { FeatFilterContext } from './FeatBrowser';

export default function Feat({
    name,
    book,
    type,
    level = 0,
    abilityIncrease = [],
    abilityMax = 20,
    abilityParagraph = false,
    scoreIncrease = 1,
    youGain = "You gain the following benefits.",
    prerequisite,
    children
}) {
    const { filterState } = useContext(FeatFilterContext);

    // Filtering Logic
    if (filterState.maxLevel === 0 && level > 0) {
        return null;
    }

    if (filterState.maxLevel === 4 && (level > 4 || level < 4)) {
        return null;
    }

    if (filterState.maxLevel === 19 && (level < 19 || level > 19)) {
        return null;
    }

    if (filterState.maxLevel === 21 && (level < 21 || level > 21)) {
        return null;
    }

    if (filterState.selectedAbility !== 'All') {
        // If feat has NO ability increase, hide it.
        if (!abilityIncrease.length) return null;

        // Check if any of the strings in abilityIncrease match the selected ability
        const hasMatch = abilityIncrease.some(stat => {
            if (!stat) return false;

            // Exact match
            if (stat === filterState.selectedAbility) return true;

            // "Strength or Dexterity" - simplistic check
            if (stat.includes(filterState.selectedAbility)) return true;

            // Handle "Any" or "Choice" if they are present as strings
            if (stat === 'Any' || stat === 'Choice') return true;

            return false;
        });

        if (!hasMatch) return null;
    }

    if (filterState.selectedBook !== 'All') {
        const bookName = book ? book.toLowerCase() : '';
        if (filterState.selectedBook === "Player's Handbook") {
            if (bookName !== 'phb' && bookName !== 'phb2024') return null;
        } else if (filterState.selectedBook === "Heroes of Faerûn") {
            if (bookName !== 'hof' && bookName !== 'hof2024') return null;
        } else if (filterState.selectedBook === "Fifth Edition Feats") {
            if (bookName !== 'fef') return null;
        } else if (filterState.selectedBook === "Unknown") {
            if (bookName !== 'unknown') return null;
        } else if (filterState.selectedBook === "Epic Characters & Heroes Handbook") {
            if (bookName !== 'echh') return null;
        } else {
            // Fallback for custom book strings if they happen to match exactly
            if (book !== filterState.selectedBook) return null;
        }
    }

    const getFeatType = () => {
        if (type) return type;
        if (level < 4) return "Origin Feat";
        if (level < 19) return "General Feat";
        return "Epic Boon";
    };

    const getPrerequisite = () => {
        const reqs = [];
        if (level) reqs.push(`Level ${level}+`);
        if (prerequisite) reqs.push(prerequisite);
        const requirements = reqs.join(', ');

        if (requirements) return `(Prerequisite: ${requirements})`;
        return null;
    };

    const getBook = () => {
        if (book === "phb2024" || book === "phb") return "Player's Handbook";
        if (book === "hof2024" || book === "hof") return "Heroes of Faerûn";
        if (book === "fef") return "Fifth Edition Feats";
        if (book === "echh") return "Epic Characters & Heroes Handbook";
        if (book === "unknown") return "Unknown";
        if (book) return `${book}`;
        return null;
    };

    const getAbilityIncrease = () => {
        if (!abilityIncrease.length) return null;

        return abilityIncrease.map((stat, idx) => (
            <span key={idx}>
                {idx > 0 && abilityIncrease.length > 2 && idx != (abilityIncrease.length - 1) && ", "}
                {idx === (abilityIncrease.length - 1) && " or "}
                {stat}
            </span>
        ));
    };

    const displayType = getFeatType();

    const renderAbilityScoreIncrease = () => (
        <>
            <span className={styles.label}>Ability Score Increase. </span>
            <span>
                Increase {abilityIncrease.length < 6 ? (
                    <>your {getAbilityIncrease()} score</>
                ) : (
                    "one ability score of your choice"
                )} by {scoreIncrease}, to a maximum of {abilityMax}.
            </span>
        </>
    );

    const displayAbilityScore = renderAbilityScoreIncrease();

    return (
        <div className={styles.featContainer} id={name ? name.replace(/\s+/g, '-').toLowerCase() : undefined}>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <h3 className={styles.featName}>
                        <span className={styles.nameAndHash}>
                            {name}
                            <a className={styles.hashLink} href={`#${name ? name.replace(/\s+/g, '-').toLowerCase() : ''}`} title={`Direct link to feat ${name}`}>#</a>
                        </span>
                        {book && (
                            <span className={styles.badge}>📖 {getBook()}</span>
                        )}
                    </h3>
                    <span className={styles.featType}>
                        {displayType} {getPrerequisite()}
                    </span>
                </div>
            </div>

            <div className={styles.content}>
                {youGain && (
                    <p>{youGain}</p>
                )}
                {abilityIncrease.length > 0 && (
                    <ul className={styles.abilityIncreaseList}>
                        <li>
                            {abilityParagraph ? <p>{displayAbilityScore}</p> : displayAbilityScore}
                        </li>
                    </ul>
                )}
                {children}
            </div>
        </div>
    );
}
