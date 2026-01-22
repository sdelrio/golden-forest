import React, { useState, createContext } from 'react';
import styles from './Feat.module.css';

export const FeatFilterContext = createContext({
    filterState: { maxLevel: 20, selectedAbility: 'All', selectedBook: 'All' },
    setFilterState: () => { },
    allFeats: []
});

export default function FeatBrowser({ children }) {
    const [filterState, setFilterState] = useState({
        maxLevel: 20,
        selectedAbility: 'All',
        selectedBook: 'All'
    });

    const allFeats = [];
    const collectFeats = (node) => {
        React.Children.forEach(node, (child) => {
            if (!React.isValidElement(child)) return;
            if (child.props && child.props.name !== undefined) {
                allFeats.push({
                    name: child.props.name,
                    level: child.props.level || 0,
                    abilityIncrease: child.props.abilityIncrease || [],
                    book: child.props.book || '',
                    id: child.props.name.replace(/\s+/g, '-').toLowerCase()
                });
            }
            if (child.props && child.props.children) {
                collectFeats(child.props.children);
            }
        });
    };
    collectFeats(children);
    allFeats.sort((a, b) => a.name.localeCompare(b.name));

    const handleLevelChange = (e) => {
        setFilterState(prev => ({ ...prev, maxLevel: Number(e.target.value) }));
    };

    const handleAbilityChange = (e) => {
        setFilterState(prev => ({ ...prev, selectedAbility: e.target.value }));
    };

    const handleBookChange = (e) => {
        setFilterState(prev => ({ ...prev, selectedBook: e.target.value }));
    };

    return (
        <FeatFilterContext.Provider value={{ filterState, setFilterState, allFeats }}>
            <div className={styles.browserContainer}>
                <div className={styles.controls}>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Level:</label>
                        <select
                            className={styles.selectInput}
                            value={filterState.maxLevel}
                            onChange={handleLevelChange}
                        >
                            <option value="20">All</option>
                            <option value="21">Level 21</option>
                            <option value="19">Level 19</option>
                            <option value="4">Level 4-18</option>
                            <option value="0">Level 0</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Ability:</label>
                        <select
                            className={styles.selectInput}
                            value={filterState.selectedAbility}
                            onChange={handleAbilityChange}
                        >
                            <option value="All">All Interests</option>
                            <option value="Strength">Strength</option>
                            <option value="Dexterity">Dexterity</option>
                            <option value="Constitution">Constitution</option>
                            <option value="Intelligence">Intelligence</option>
                            <option value="Wisdom">Wisdom</option>
                            <option value="Charisma">Charisma</option>
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Book:</label>
                        <select
                            className={styles.selectInput}
                            value={filterState.selectedBook}
                            onChange={handleBookChange}
                        >
                            <option value="All">All Books</option>
                            <option value="Player's Handbook">Player's Handbook</option>
                            <option value="Heroes of Faerûn">Heroes of Faerûn</option>
                            <option value="Fifth Edition Feats">Fifth Edition Feats</option>
                            <option value="Epic Characters & Heroes Handbook">Epic Characters & Heroes Handbook</option>
                        </select>
                    </div>
                </div>

                <div className={styles.featList}>
                    {children}
                </div>
            </div>
        </FeatFilterContext.Provider>
    );
}
