import React from 'react';
import clsx from 'clsx';
import styles from './CategoryFilter.module.css';

export default function CategoryFilter({ categories, selected, onChange, counts }) {
  return (
    <div className={styles.filterBar}>
      {categories.map((cat) => {
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
