import React from 'react';
import { CATEGORY_COLORS } from '../../constants/colors';
import styles from './TemplateCard.module.css';

export default function TemplateCard({ template, onSelect }) {
  const color = CATEGORY_COLORS[template.category] || '#6b7280';

  return (
    <button
      className={styles.card}
      onClick={() => onSelect(template)}
      type="button"
      style={{ '--card-accent': color }}
    >
      <div className={styles.header}>
        <span className={styles.categoryBadge} style={{ background: color }}>
          {template.category}
        </span>
      </div>

      <h3 className={styles.name}>{template.name}</h3>
      <p className={styles.description}>{template.description}</p>

      {template.tags && template.tags.length > 0 && (
        <div className={styles.tags}>
          {template.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
          {template.tags.length > 3 && (
            <span className={styles.tag}>+{template.tags.length - 3}</span>
          )}
        </div>
      )}
    </button>
  );
}
