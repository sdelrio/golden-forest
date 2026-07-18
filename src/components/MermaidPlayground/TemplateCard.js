import React from 'react';
import { CATEGORY_COLORS } from '../../constants/colors';
import DashboardCard from '../DashboardCard/DashboardCard';
import dashboardStyles from '../DashboardCard/DashboardCard.module.css';
import styles from './TemplateCard.module.css';

export default function TemplateCard({ template, onSelect }) {
  const color = CATEGORY_COLORS[template.category] || '#6b7280';

  return (
    <DashboardCard
      accentColor={color}
      onClick={() => onSelect(template)}
      header={
        <span className={dashboardStyles.categoryBadge} style={{ background: color }}>
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
