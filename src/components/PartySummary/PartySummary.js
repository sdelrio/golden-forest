import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Icon } from '@iconify/react';
import { parseCharacterXml } from '../XmlChar/XmlParser';
import { signed } from '../../utils/format';
import styles from './PartySummary.module.css';

const ROLE_CONFIG = {
    tank: { icon: 'mdi:shield', label: 'Tank', color: '#4a90d9' },
    healer: { icon: 'mdi:heart-plus', label: 'Healer', color: '#5cb85c' },
    damage: { icon: 'mdi:sword-cross', label: 'Damage Dealer', color: '#d9534f' },
    support: { icon: 'mdi:creation', label: 'Support', color: '#f0ad4e' },
    utility: { icon: 'mdi:hammer-wrench', label: 'Utility', color: '#9b59b6' },
};

function PartySummaryInternal() {
    const [partyConfig, setPartyConfig] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const partyBaseUrl = useBaseUrl('/fg/party.json');
    const charsBaseUrl = useBaseUrl('/fg/chars');

    useEffect(() => {
        let cancelled = false;

        async function loadParty() {
            try {
                const resp = await fetch(partyBaseUrl);
                if (!resp.ok) return;
                const config = await resp.json();
                if (cancelled) return;

                setPartyConfig(config);

                const results = await Promise.all(
                    config.members.map(async (member) => {
                        try {
                            const url = `${charsBaseUrl}/${member.filename}.xml`;
                            const xmlResp = await fetch(url);
                            if (!xmlResp.ok) return null;
                            const xmlText = await xmlResp.text();
                            return parseCharacterXml(xmlText);
                        } catch {
                            return null;
                        }
                    })
                );

                if (!cancelled) setCharacters(results.filter(Boolean));
            } catch {
                // silent
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadParty();
        return () => { cancelled = true; };
    }, [partyBaseUrl, charsBaseUrl]);

    if (loading || !characters.length) return null;

    const totalHp = characters.reduce((sum, c) => sum + (c.hp || 0), 0);
    const avgAc = characters.length ? Math.round(characters.reduce((sum, c) => sum + (c.ac || 0), 0) / characters.length) : 0;
    const avgInit = characters.length ? (characters.reduce((sum, c) => sum + (c.initiative || 0), 0) / characters.length).toFixed(1) : '0';
    const totalLevel = characters.reduce((sum, c) => sum + c.classes.reduce((s, cl) => s + cl.level, 0), 0);

    const roleCounts = {};
    partyConfig?.members?.forEach(m => {
        const role = m.role || 'damage';
        roleCounts[role] = (roleCounts[role] || 0) + 1;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.partyName}>{partyConfig?.partyName || 'Party'}</span>
                <span className={styles.separator}>&mdash;</span>
                <span>{characters.length} members</span>
                <span className={styles.separator}>&bull;</span>
                <span>Lvl {totalLevel}</span>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.stat} title="Sum of all character hit points">
                    <span className={styles.statValue}>{totalHp}</span>
                    <span className={styles.statLabel}>HP (total)</span>
                </div>
                <div className={styles.stat} title="Mean armor class across all characters">
                    <span className={styles.statValue}>{avgAc}</span>
                    <span className={styles.statLabel}>AC (avg)</span>
                </div>
                <div className={styles.stat} title="Mean initiative bonus across all characters">
                    <span className={styles.statValue}>{signed(parseFloat(avgInit))}</span>
                    <span className={styles.statLabel}>Init (avg)</span>
                </div>
            </div>

            <div className={styles.roles}>
                {Object.entries(roleCounts).map(([role, count]) => {
                    const config = ROLE_CONFIG[role] || ROLE_CONFIG.damage;
                    return (
                        <span key={role} className={styles.roleBadge} style={{ borderColor: config.color }}>
                            <Icon icon={config.icon} style={{ color: config.color }} className={styles.roleIcon} />
                            <span className={styles.roleCount}>{count}</span>
                            <span className={styles.roleLabel}>{config.label}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default function PartySummary() {
    return (
        <BrowserOnly fallback={null}>
            {() => <PartySummaryInternal />}
        </BrowserOnly>
    );
}
