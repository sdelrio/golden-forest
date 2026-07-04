import React from 'react';
import styles from './TemplateCard.module.css';

const CATEGORY_COLORS = {
  flowchart: '#3b82f6',
  sequence: '#8b5cf6',
  class: '#22c55e',
  state: '#f97316',
  er: '#06b6d4',
  gantt: '#ec4899',
  pie: '#eab308',
  mindmap: '#a78bfa',
  architecture: '#14b8a6',
  gitgraph: '#ef4444',
  xychart: '#0ea5e9',
  treeview: '#84cc16',
  radar: '#f43f5e',
};

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
