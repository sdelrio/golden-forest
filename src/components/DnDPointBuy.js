import React, { useState } from 'react';
import styles from './DnDPointBuy.module.css';

const ABILITIES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
const MIN_SCORE = 8;
const MAX_SCORE = 15;
const TOTAL_POINTS = 27;

// Point costs for each score (D&D 5e standard point buy)
const POINT_COSTS = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
};

const DnDPointBuy = () => {
    const [scores, setScores] = useState({
        STR: 8,
        DEX: 8,
        CON: 8,
        INT: 8,
        WIS: 8,
        CHA: 8
    });

    const calculateModifier = (score) => {
        return Math.floor((score - 10) / 2);
    };

    const formatModifier = (modifier) => {
        return modifier >= 0 ? `+${modifier}` : `${modifier}`;
    };

    const getPointsSpent = () => {
        return Object.values(scores).reduce((total, score) => total + POINT_COSTS[score], 0);
    };

    const getPointsRemaining = () => {
        return TOTAL_POINTS - getPointsSpent();
    };

    const canIncrease = (ability) => {
        const currentScore = scores[ability];
        if (currentScore >= MAX_SCORE) return false;
        const costDifference = POINT_COSTS[currentScore + 1] - POINT_COSTS[currentScore];
        return getPointsRemaining() >= costDifference;
    };

    const canDecrease = (ability) => {
        return scores[ability] > MIN_SCORE;
    };

    const increaseScore = (ability) => {
        if (canIncrease(ability)) {
            setScores({ ...scores, [ability]: scores[ability] + 1 });
        }
    };

    const decreaseScore = (ability) => {
        if (canDecrease(ability)) {
            setScores({ ...scores, [ability]: scores[ability] - 1 });
        }
    };

    const resetScores = () => {
        const resetScores = {};
        ABILITIES.forEach(ability => {
            resetScores[ability] = 8;
        });
        setScores(resetScores);
    };

    const pointsRemaining = getPointsRemaining();

    return (
        <div className={styles.pointBuyContainer}>
            <div className={styles.header}>
                <h3>D&D 5e Point Buy System</h3>
                <div className={styles.pointsDisplay}>
                    <span className={styles.pointsLabel}>Points Remaining:</span>
                    <span className={`${styles.pointsValue} ${pointsRemaining === 0 ? styles.pointsZero : ''}`}>
                        {pointsRemaining} / {TOTAL_POINTS}
                    </span>
                </div>
            </div>

            <div className={styles.abilitiesGrid}>
                {ABILITIES.map((ability) => {
                    const score = scores[ability];
                    const modifier = calculateModifier(score);

                    return (
                        <div key={ability} className={styles.abilityCard}>
                            <div className={styles.abilityName}>{ability}</div>
                            <div className={styles.abilityControls}>
                                <button
                                    className={styles.controlButton}
                                    onClick={() => decreaseScore(ability)}
                                    disabled={!canDecrease(ability)}
                                    aria-label={`Decrease ${ability}`}
                                >
                                    −
                                </button>
                                <div className={styles.scoreDisplay}>
                                    <div className={styles.scoreValue}>{score}</div>
                                    <div className={styles.modifierValue}>{formatModifier(modifier)}</div>
                                </div>
                                <button
                                    className={styles.controlButton}
                                    onClick={() => increaseScore(ability)}
                                    disabled={!canIncrease(ability)}
                                    aria-label={`Increase ${ability}`}
                                >
                                    +
                                </button>
                            </div>
                            <div className={styles.pointCost}>
                                Cost: {POINT_COSTS[score]} {POINT_COSTS[score] === 1 ? 'point' : 'points'}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.footer}>
                <button className={styles.resetButton} onClick={resetScores}>
                    Reset All Scores
                </button>
                {pointsRemaining === 0 && (
                    <div className={styles.completeMessage}>
                        ✓ All points allocated!
                    </div>
                )}
            </div>

            <div className={styles.infoBox}>
                <h4>Point Buy Rules:</h4>
                <ul>
                    <li>You have <strong>27 points</strong> to spend on ability scores</li>
                    <li>Each ability score starts at <strong>8</strong></li>
                    <li>You can increase scores up to <strong>15</strong> (before racial bonuses)</li>
                    <li>Higher scores cost more points (see cost below each ability)</li>
                </ul>
            </div>
        </div>
    );
};

export default DnDPointBuy;
