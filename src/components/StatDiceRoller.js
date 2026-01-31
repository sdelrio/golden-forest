import React, { useState, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function StatDiceRoller() {
    return (
        <BrowserOnly fallback={<div>Loading dice roller...</div>}>
            {() => {
                const ReactDice = require('react-dice-complete').default;
                return <StatDiceRollerInternal ReactDice={ReactDice} />;
            }}
        </BrowserOnly>
    );
}

const ABILITIES = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

function StatDiceRollerInternal({ ReactDice }) {
    const [results, setResults] = useState({});
    const [rollingIndex, setRollingIndex] = useState(-1);
    const diceRefs = useRef([]);

    const handleRollDone = (index, total, dice) => {
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

        // If we are in the middle of a "Roll All" sequence, trigger the next one
        if (rollingIndex !== -1 && index === rollingIndex && index < ABILITIES.length - 1) {
            setRollingIndex(index + 1);
            setTimeout(() => {
                if (diceRefs.current[index + 1]) {
                    diceRefs.current[index + 1].rollAll();
                }
            }, 600); // Small delay between rolls for better visual feedback
        } else if (index === ABILITIES.length - 1) {
            setRollingIndex(-1); // Finished sequence
        }
    };

    const rollAll = () => {
        setResults({});
        setRollingIndex(0);
        if (diceRefs.current[0]) {
            diceRefs.current[0].rollAll();
        }
    };

    const rollIndividual = (index) => {
        if (diceRefs.current[index]) {
            diceRefs.current[index].rollAll();
        }
    };

    return (
        <div style={{
            padding: '0.25em',
            borderRadius: '8px',
            margin: '1.25rem 0',
            backgroundColor: 'rgba(0,0,0,0.02)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
            border: '1px solid var(--ifm-color-emphasis-200)'
        }}>
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <button
                    className="button button--primary button--lg"
                    onClick={rollAll}
                    disabled={rollingIndex !== -1}
                >
                    {rollingIndex !== -1 ? 'Rolling...' : '🎲 Roll All Abilities'}
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem'
            }}>
                {ABILITIES.map((ability, index) => (
                    <div key={ability} style={{
                        padding: '1rem',
                        backgroundColor: 'var(--ifm-background-surface-color)',
                        borderRadius: '6px',
                        border: '1px solid var(--ifm-color-emphasis-300)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        opacity: rollingIndex !== -1 && rollingIndex !== index ? 0.6 : 1,
                        transition: 'opacity 0.2s'
                    }}>


                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            marginBottom: '0.5rem',
                            color: 'var(--ifm-heading-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span>{ability}: {results[index]?.sum || 'Rolling...'}</span>
                            {results[index]?.sum !== undefined && (
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--ifm-color-emphasis-700)',
                                    fontWeight: 'normal'
                                }}>
                                    ({Math.floor((results[index].sum - 10) / 2) > 0 ? '+' : ''}{Math.floor((results[index].sum - 10) / 2)})
                                </span>
                            )}

                            <button
                                className="button button--secondary button--sm"
                                style={{ marginLeft: 'auto' }}
                                onClick={() => rollIndividual(index)}
                                disabled={rollingIndex !== -1}
                            >
                                Retry
                            </button>
                        </div>

                        <div style={{ transform: 'scale(0.8)', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '280px', flexShrink: 0 }}>
                            <ReactDice
                                numDice={4}
                                rollDone={(total, dice) => handleRollDone(index, total, dice)}
                                ref={el => diceRefs.current[index] = el}
                                faceColor="#fff"
                                dotColor="#333"
                                outlineColor="#666"
                                outline={4}
                                dieSize={60}
                                dieCornerRadius={10}
                                margin={5}
                            />
                        </div>

                        {results[index] ? (
                            <div style={{ textAlign: 'center', marginTop: '0' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-700)' }}>
                                    {results[index].all.join(', ')} → {results[index].topThree.join('+')}
                                </div>
                            </div>
                        ) : (
                            <div style={{ height: '52.8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ifm-color-emphasis-500)', fontSize: '0.9rem' }}>
                                Waiting to roll...
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
