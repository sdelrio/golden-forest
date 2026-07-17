import React from 'react';
import { CATEGORY_COLORS } from '../../constants/colors';
import styles from './CommandCard.module.css';

export default function CommandCard({ command, onSelect }) {
  const color = CATEGORY_COLORS[command.category] || '#6b7280';

  return (
    <button
      className={styles.card}
      onClick={() => onSelect(command)}
      type="button"
      style={{ '--card-accent': color }}
    >
      <div className={styles.header}>
        <span className={styles.toolBadge} style={{ background: color }}>
          {command.tool}
        </span>
        <span className={styles.categoryBadge}>{command.category}</span>
      </div>

      <code className={styles.syntax}>{command.syntax}</code>
      <p className={styles.description}>{command.description}</p>

      {command.tags && command.tags.length > 0 && (
        <div className={styles.tags}>
          {command.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
          {command.tags.length > 3 && (
            <span className={styles.tag}>+{command.tags.length - 3}</span>
          )}
        </div>
      )}
    </button>
  );
}
