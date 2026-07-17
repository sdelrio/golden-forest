import React, { useState, useRef, useMemo } from 'react';
import clsx from 'clsx';
import { ABILITIES, calculateModifier } from '../../constants/dnd';
import withBrowserOnly from '../../utils/withBrowserOnly';
import styles from './StatDiceRoller.module.css';

export default withBrowserOnly(StatDiceRollerInternal, {
  fallback: <div>Loading dice roller...</div>,
});

function StatDiceRollerInternal() {
    const ReactDice = require('react-dice-complete').default;
    const [results, setResults] = useState({});
    const [rollingIndex, setRollingIndex] = useState(-1);
    const diceRefs = useRef([]);
    const randomRef = useRef(null);
    const stateRef = useRef({ rollingIndex: -1 });

    stateRef.current.rollingIndex = rollingIndex;

    if (!randomRef.current) {
        const { Random, browserCrypto } = require('random-js');
        randomRef.current = new Random(browserCrypto);
    }

    const getRandomRolls = () => {
        return randomRef.current.dice(6, 4);
    };

    const rollDoneHandlers = useMemo(() => {
        return ABILITIES.map((_, index) => (total, dice) => {
            const sorted = [...dice].sort((a, b) => b - a);
            const topThree = sorted.slice(0, 3);
            const sum = topThree.reduce((a, b) => a + b, 0);

            setResults(prev => ({
                ...prev,
                [index]: {
                    all: dice,
                    topThree,
                    sum
                }
            }));

            const currentRollingIndex = stateRef.current.rollingIndex;
            if (currentRollingIndex !== -1 && index === currentRollingIndex && index < ABILITIES.length - 1) {
                setRollingIndex(index + 1);
                setTimeout(() => {
                    if (diceRefs.current[index + 1]) {
                        diceRefs.current[index + 1].rollAll(getRandomRolls());
                    }
                }, 137);
            } else if (index === ABILITIES.length - 1) {
                setRollingIndex(-1);
            }
        });
    }, []);

    const rollAll = () => {
        setResults({});
        setRollingIndex(0);
        if (diceRefs.current[0]) {
            diceRefs.current[0].rollAll(getRandomRolls());
        }
    };

    const rollIndividual = (index) => {
        if (diceRefs.current[index]) {
            diceRefs.current[index].rollAll(getRandomRolls());
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.rollButtonContainer}>
                <button
                    className="button button--primary button--lg"
                    onClick={rollAll}
                    disabled={rollingIndex !== -1}
                >
                    {rollingIndex !== -1 ? 'Rolling...' : '🎲 Roll All Abilities'}
                </button>
            </div>

            <div className={styles.grid}>
                {ABILITIES.map((ability, index) => (
                    <div key={ability} className={clsx(styles.abilityCard, {
                        [styles.abilityCardDimmed]: rollingIndex !== -1 && rollingIndex !== index
                    })}>
                        <div className={styles.abilityHeader}>
                            <span>{ability}: {results[index]?.sum || 'Rolling...'}</span>
                            {results[index]?.sum !== undefined && (
                                <span className={styles.modifier}>
                                    ({calculateModifier(results[index].sum) > 0 ? '+' : ''}{calculateModifier(results[index].sum)})
                                </span>
                            )}

                            <button
                                className={clsx('button button--secondary button--sm', styles.retryButton)}
                                onClick={() => rollIndividual(index)}
                                disabled={rollingIndex !== -1}
                            >
                                Retry
                            </button>
                        </div>

                        <div className={styles.diceWrapper}>
                            <ReactDice
                                numDice={4}
                                rollDone={rollDoneHandlers[index]}
                                ref={el => diceRefs.current[index] = el}
                                faceColor="#fff0ac"
                                dotColor="#c02020"
                                outlineColor="#226"
                                outline={true}
                                dieSize={60}
                                dieCornerRadius={10}
                                rollTime={1}
                                margin={5}
                            />
                        </div>

                        {results[index] ? (
                            <div className={styles.results}>
                                <div className={styles.resultsDetail}>
                                    {results[index].all.join(', ')} → {results[index].topThree.join('+')}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.waitingPlaceholder}>
                                Waiting to roll...
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
