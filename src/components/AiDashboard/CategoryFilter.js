import React from 'react';
import clsx from 'clsx';
import styles from './CategoryFilter.module.css';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: 'mdi:view-grid' },
  { id: 'agents', label: 'Agents', icon: 'mdi:robot' },
  { id: 'tools', label: 'Tools', icon: 'mdi:hammer-wrench' },
  { id: 'mcp', label: 'MCP', icon: 'mdi:puzzle' },
  { id: 'models', label: 'Models', icon: 'mdi:brain' },
  { id: 'browsers', label: 'Browsers', icon: 'mdi:web' },
  { id: 'workflows', label: 'Workflows', icon: 'mdi:git-branch' },
  { id: 'prompts', label: 'Prompts', icon: 'mdi:message-text' },
  { id: 'security', label: 'Security', icon: 'mdi:shield-lock' },
  { id: 'comparatives', label: 'Comparatives', icon: 'mdi:book-open-variant' },
];

export { CATEGORIES };

export default function CategoryFilter({ selected, onChange, counts }) {
  return (
    <div className={styles.filterBar}>
      {CATEGORIES.map((cat) => {
        const count = cat.id === 'all' ? counts.total : (counts[cat.id] || 0);
        return (
          <button
            key={cat.id}
            className={clsx(styles.pill, selected === cat.id && styles.active)}
            onClick={() => onChange(cat.id)}
            type="button"
          >
            <span className={styles.label}>{cat.label}</span>
            {count > 0 && <span className={styles.count}>{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
