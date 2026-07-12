import React, { useContext } from 'react';
import styles from './Feat.module.css';
import { FeatFilterContext } from './FeatBrowser';

export const BOOK_ALIASES = {
    "Player's Handbook": ['phb', 'phb2024'],
    "Heroes of Faerûn": ['hof', 'hof2024'],
    "Fifth Edition Feats": ['fef'],
    "Unknown": ['unknown'],
    "Epic Characters & Heroes Handbook": ['echh'],
};

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
        const allowedCodes = BOOK_ALIASES[filterState.selectedBook];
        if (allowedCodes) {
            if (!allowedCodes.includes(bookName)) return null;
        } else if (book !== filterState.selectedBook) {
            return null;
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
        if (!book) return null;
        const label = Object.entries(BOOK_ALIASES).find(([, codes]) => codes.includes(book));
        return label ? label[0] : book;
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
