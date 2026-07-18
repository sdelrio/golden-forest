import React from 'react';
import clsx from 'clsx';
import styles from './DashboardCard.module.css';

export default function DashboardCard({
  children,
  header,
  headerRight,
  tags,
  accentColor,
  onClick,
  className,
}) {
  return (
    <button
      className={clsx(styles.card, className)}
      onClick={onClick}
      type="button"
      style={{ '--card-accent': accentColor }}
    >
      {(header || headerRight) && (
        <div className={styles.header}>
          {header}
          {headerRight}
        </div>
      )}

      {children}

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
          {tags.length > 3 && (
            <span className={styles.tag}>+{tags.length - 3}</span>
          )}
        </div>
      )}
    </button>
  );
}
