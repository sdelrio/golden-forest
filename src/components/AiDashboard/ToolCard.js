import React from 'react';
import clsx from 'clsx';
import StatusBadge from './StatusBadge';
import { CATEGORY_COLORS } from '../../constants/colors';
import { formatNumber, timeAgo } from '../../utils/format';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool, onSelect }) {
  const color = CATEGORY_COLORS[tool.category] || '#6b7280';
  const stars = formatNumber(tool.githubStars, { compact: true });
  const lastPush = timeAgo(tool.githubLastPush, { compact: true });

  return (
    <button
      className={styles.card}
      onClick={() => onSelect(tool)}
      type="button"
      style={{ '--card-accent': color }}
    >
      <div className={styles.header}>
        <span className={styles.categoryBadge} style={{ background: color }}>
          {tool.category}
        </span>
        {tool.healthScore != null && (
          <StatusBadge score={tool.healthScore} size="sm" />
        )}
      </div>

      <h3 className={styles.name}>{tool.name}</h3>
      <p className={styles.description}>{tool.description}</p>

      <div className={styles.meta}>
        {stars && (
          <span className={styles.metaItem} title={`${tool.githubStars} GitHub stars`}>
            ★ {stars}
          </span>
        )}
        {tool.npmVersion && (
          <span className={styles.metaItem} title={`npm: ${tool.npmVersion}`}>
            npm {tool.npmVersion}
          </span>
        )}
        {lastPush && (
          <span className={styles.metaItem} title={`Last push: ${tool.githubLastPush}`}>
            {lastPush}
          </span>
        )}
      </div>

      {tool.tags && tool.tags.length > 0 && (
        <div className={styles.tags}>
          {tool.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
          {tool.tags.length > 3 && (
            <span className={styles.tag}>+{tool.tags.length - 3}</span>
          )}
        </div>
      )}
    </button>
  );
}
