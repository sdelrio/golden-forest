import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import dashboardStyles from '../DashboardCard/DashboardCard.module.css';
import styles from './TemplateCard.module.css';

export default function TemplateCard({ template, onSelect }) {
  return (
    <DashboardCard
      onClick={() => onSelect(template)}
      header={
        <span className={dashboardStyles.categoryBadge}>
          {template.category}
        </span>
      }
      tags={template.tags}
    >
      <h3 className={styles.name}>{template.name}</h3>
      <p className={dashboardStyles.description}>{template.description}</p>
    </DashboardCard>
  );
}
