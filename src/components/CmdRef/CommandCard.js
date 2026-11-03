import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import dashboardStyles from '../DashboardCard/DashboardCard.module.css';
import styles from './CommandCard.module.css';

export default function CommandCard({ command, onSelect }) {
  return (
    <DashboardCard
      onClick={() => onSelect(command)}
      header={
        <>
          <span className={styles.toolBadge}>
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
