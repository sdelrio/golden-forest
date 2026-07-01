import React from 'react';
import clsx from 'clsx';
import StatusBadge from './StatusBadge';
import styles from './ToolCard.module.css';

const CATEGORY_COLORS = {
  mcp: '#8b5cf6',
  tools: '#3b82f6',
  agents: '#f97316',
  models: '#22c55e',
  workflows: '#ec4899',
  prompts: '#eab308',
  browsers: '#06b6d4',
  security: '#ef4444',
  'comparatives': '#a78bfa',
};

const CATEGORY_ICONS = {
  mcp: 'mdi:puzzle',
  tools: 'mdi:hammer-wrench',
  agents: 'mdi:robot',
  models: 'mdi:brain',
  workflows: 'mdi:git-branch',
  prompts: 'mdi:message-text',
  browsers: 'mdi:web',
  security: 'mdi:shield-lock',
  'comparatives': 'mdi:book-open-variant',
};

function formatNumber(n) {
  if (n == null) return null;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function timeAgo(dateStr) {
  if (!dateStr) return null;
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function ToolCard({ tool, onSelect }) {
  const color = CATEGORY_COLORS[tool.category] || '#6b7280';
  const stars = formatNumber(tool.githubStars);
  const lastPush = timeAgo(tool.githubLastPush);

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
