import React from 'react';
import { CATEGORY_COLORS } from '../../constants/colors';
import DashboardCard from '../DashboardCard/DashboardCard';
import dashboardStyles from '../DashboardCard/DashboardCard.module.css';
import styles from './CommandCard.module.css';

export default function CommandCard({ command, onSelect }) {
  const color = CATEGORY_COLORS[command.category] || '#6b7280';

  return (
    <DashboardCard
      accentColor={color}
      onClick={() => onSelect(command)}
      header={
        <>
          <span className={styles.toolBadge} style={{ background: color }}>
            {command.tool}
          </span>
          <span className={dashboardStyles.categoryBadge}>{command.category}</span>
        </>
      }
      tags={command.tags}
    >
      <code className={styles.syntax}>{command.syntax}</code>
      <p className={dashboardStyles.description}>{command.description}</p>
    </DashboardCard>
  );
}
