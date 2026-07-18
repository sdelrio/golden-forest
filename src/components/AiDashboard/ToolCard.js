import React from 'react';
import StatusBadge from './StatusBadge';
import { CATEGORY_COLORS } from '../../constants/colors';
import { formatNumber, timeAgo } from '../../utils/format';
import DashboardCard from '../DashboardCard/DashboardCard';
import dashboardStyles from '../DashboardCard/DashboardCard.module.css';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool, onSelect }) {
  const color = CATEGORY_COLORS[tool.category] || '#6b7280';
  const stars = formatNumber(tool.githubStars, { compact: true });
  const lastPush = timeAgo(tool.githubLastPush, { compact: true });

  return (
    <DashboardCard
      accentColor={color}
      onClick={() => onSelect(tool)}
      header={
        <>
          <span className={dashboardStyles.categoryBadge} style={{ background: color }}>
            {tool.category}
          </span>
          {tool.healthScore != null && (
            <StatusBadge score={tool.healthScore} size="sm" />
          )}
        </>
      }
      tags={tool.tags}
    >
      <h3 className={styles.name}>{tool.name}</h3>
      <p className={dashboardStyles.description}>{tool.description}</p>

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
    </DashboardCard>
  );
}
