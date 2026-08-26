import React from 'react';
import clsx from 'clsx';
import styles from './CategoryFilter.module.css';

export default function CategoryFilter({ categories, selected, onChange, counts, hideEmpty = false }) {
  return (
    <div className={styles.filterBar} role="group" aria-label="Filter by category">
      {categories.map((cat) => {
        const count = cat.id === 'all' ? counts.total : (counts[cat.id] || 0);
        if (hideEmpty && cat.id !== 'all' && count === 0) return null;
        const isSelected = selected === cat.id;
        return (
          <button
            key={cat.id}
            className={clsx(styles.pill, isSelected && styles.active)}
            onClick={() => onChange(cat.id)}
            type="button"
            aria-pressed={isSelected}
          >
            <span className={styles.label}>{cat.label}</span>
            {count > 0 && <span className={styles.count}>{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
