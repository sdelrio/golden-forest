import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './XmlChar.module.css';
import { parseCharacterXml } from './XmlParser';
import { signed } from './utils';
import clsx from 'clsx';

export default function XmlChar(props) {
    return (
        <BrowserOnly fallback={<div className={styles.container}>
                                    <div className={styles.content}>
                                        <h1 className={styles.name}>Loading character...</h1>
                                    </div>
                                </div>}>
            {() => <XmlCharInternal {...props} />}
        </BrowserOnly>
    );
}

function XmlCharInternal({ filename, display = 'medium', image }) {
    const [charData, setCharData] = useState(null);
    const [error, setError] = useState(null);

    const characterBaseUrl = useBaseUrl('/fg/chars');
    const avatarBaseUrl = useBaseUrl('/fg/avatar');

    const isSmall = display === 'small';
    const isMedium = display === 'medium';
    const isLarge = display === 'large';

    useEffect(() => {
        if (!filename) return;
        let xmlSuffix = '';
        if (!filename.endsWith('.xml')) {
            xmlSuffix = '.xml';
        }
        const url = `${characterBaseUrl}/${filename}${xmlSuffix}`;
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`File not found: ${filename}`);
                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('xml') && !contentType.includes('text/plain')) {
                    throw new Error(`File not found: ${filename}`);
                }
                return response.text();
            })
            .then(xmlString => {
                const data = parseCharacterXml(xmlString);
                if (!data) throw new Error(`Could not parse ${filename}`);
                setCharData(data);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
    }, [filename]);

    const [finalImage, setFinalImage] = useState(image);
    useEffect(() => {
        // Only look for a default if no image prop was provided
        if (!image && isLarge) {
            const withoutSuffix = filename.replace('.xml', '');
            const url = `${avatarBaseUrl}/${withoutSuffix}.jpg`;

            fetch(url, { method: 'HEAD' }) // 'HEAD' just checks if file exists without downloading it
                .then(response => {
                    if (!response.ok) throw new Error(`Could not fetch ${filename}`);
                    return response.text();
                })
                .catch(err => {
                    console.error(err);
                    setError(err.message);
                })
                .then(res => {
                    if (res.ok) setFinalImage(url);
                    else setFinalImage(`${avatarBaseUrl}/faceless.svg`); // Fallback path
                })
                .catch(() => setFinalImage(`${avatarBaseUrl}/faceless.svg`));
                // Empty face placeholder
        }
    }, [filename, image, avatarBaseUrl, isLarge]);

    if (error) return <div className={styles.error}>Error: {error}</div>;
    if (!charData) return <div className={styles.loading}>Loading {filename}...</div>;

    const { name, race, alignment, background, deity, classes, abilities, ac, hp, speed, initiative, profBonus, skills, languages, feats } = charData;

    const renderPortrait = () => {
        if (!isLarge) return null;

        if (image) {
            const url = `${avatarBaseUrl}/${image}`;

            return (
                <div className={styles.portraitContainer}>
                    <img src={url} alt={name} className={styles.portrait} />
                </div>
            );
        }

        return finalImage ? (
            <div className={styles.portraitContainer}>
                <img src={finalImage} alt={name} className={styles.emptyFace} />
            </div>
        ) : null;
    };

    return (
        <div className={clsx(styles.container, isMedium && styles.containerMedium, isSmall && styles.containerSmall, styles[display])}>
            {renderPortrait()}

            <div className={styles.content}>
                {isSmall ? (
                    <h3 className={styles.name}>{name}</h3>
                ) : isMedium ? (
                    <h2 className={styles.name}>{name}</h2>
                ) : (
                    <h1 className={styles.name}>{name}</h1>
                )}
                <p className={clsx(styles.classLevel, isSmall && styles.small)}>
                    {race && <span>{race} </span>}
                    {classes.map(c => `${c.name} ${c.level}`).join(' / ')}
                    {alignment && <span>, {alignment.toLowerCase()}</span>}
                    {background && <span>, {background.toLowerCase()}</span>}
                    {deity && <span>, deity {deity}</span>}
                </p>

                <hr className={styles.horizontalRule} />
                <ul className={clsx(styles.vitals, isSmall && styles.small)}>
                    <li className={styles.vitalItem}>{isSmall ? 'AC' : 'Armor Class'} <span>{ac}</span></li>
                    <li className={styles.vitalItem}>Initiative <span>{signed(initiative)} ({10 + initiative})</span></li>
                    <li className={styles.vitalItem}>{isSmall ? 'HP' : 'Hit Points'} <span>{hp}</span></li>
                    <li className={styles.vitalItem}>Speed <span>{speed} ft.</span></li>
                </ul>

                {!isSmall && (
                    <>
                        <hr className={styles.horizontalRule} />
                        <div className={styles.abilities}>
                            {Object.entries(abilities).map(([stat, data]) => (
                                <div key={stat} className={styles.ability}>
                                    <div className={styles.abilityLabel}>{stat.slice(0, 3).toUpperCase()}</div>
                                    <div className={styles.abilityValue}>{data.score} ({signed(data.bonus)})</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {isSmall && (
                    <div className={styles.abilitiesCompact}>
                        <div className={styles.abilitiesCompactHeader}>
                            <span></span><span></span><span>MOD</span><span>SAVE</span>
                            <span></span><span></span><span>MOD</span><span>SAVE</span>
                            <span></span><span></span><span>MOD</span><span>SAVE</span>
                        </div>
                        {Object.entries(abilities).map(([stat, data]) => (
                            <React.Fragment key={stat}>
                                <span className={styles.abilityCompactLabel}>{stat.slice(0, 3).toUpperCase()}</span>
                                <span className={styles.abilityCompactValue}>{data.score}</span>
                                <span className={styles.abilityCompactBonus}>{signed(data.bonus)}</span>
                                <span className={styles.abilityCompactSave}>{signed(data.save)}</span>
                            </React.Fragment>
                        ))}
                    </div>
                )}

                {!isSmall && (
                    <>
                        <hr className={styles.horizontalRule} />
                        <div className={styles.infoSection}>
                            <span className={styles.infoLabel}>Proficient Skills</span>
                            <ul className={styles.infoList}>
                                {skills.length > 0 ? skills.map(s => (
                                    <li key={s.name}>{s.name} {signed(s.total)}</li>
                                )) : <li>None</li>}
                            </ul>
                        </div>

                        <div className={styles.infoSection}>
                            <span className={styles.infoLabel}>Languages</span>
                            <ul className={styles.infoList}>
                                {languages.length > 0 ? languages.map(l => (
                                    <li key={l}>{l}</li>
                                )) : <li>Common</li>}
                            </ul>
                        </div>

                        <div className={styles.infoSection}>
                            <span className={styles.infoLabel}>Proficiency Bonus:</span>
                            <ul className={styles.infoList}>
                                <li>{signed(profBonus)}</li>
                            </ul>
                        </div>
                    </>
                )}

                {isLarge && feats.length > 0 && (
                    <div className={styles.infoSection}>
                        <span className={styles.infoLabel}>Feats:</span>
                        <ul className={styles.infoList}>
                            {feats.map(f => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.clearfix}></div>
        </div>
    );
}
