import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import styles from './Steps.module.css';

const STATE_CYCLE = ['default', 'current', 'completed', 'error'];

export default function Step({ children, title, status, icon, interactive = false }) {
  const [internalStatus, setInternalStatus] = useState(status || 'default');

  const currentStatus = interactive ? internalStatus : (status || 'default');

  const handleClick = () => {
    if (!interactive) return;
    setInternalStatus(prev => {
      const currentIndex = STATE_CYCLE.indexOf(prev);
      const nextIndex = (currentIndex + 1) % STATE_CYCLE.length;
      return STATE_CYCLE[nextIndex];
    });
  };

  const getIndicatorContent = () => {
    if (icon && currentStatus !== 'completed' && currentStatus !== 'error') {
      const iconName = icon.includes(':') ? icon : `mdi:${icon}`;
      return <Icon icon={iconName} className={styles.stepIcon} />;
    }

    if (currentStatus === 'completed') {
      return <Icon icon="mdi:check" className={styles.stepIcon} />;
    }

    if (currentStatus === 'error') {
      return <Icon icon="mdi:alert" className={styles.stepIcon} />;
    }

    return null;
  };

  const indicatorContent = getIndicatorContent();

  return (
    <div
      className={clsx(
        styles.stepItem,
        currentStatus !== 'default' && styles[`step${currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}`],
        interactive && styles.stepInteractive
      )}
    >
      <div
        className={styles.stepIndicator}
        onClick={handleClick}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onKeyDown={interactive ? (e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); } : undefined}
      >
        {indicatorContent}
      </div>
      <div className={styles.stepContentWrapper}>
        {title && <h3 className={styles.stepTitle}>{title}</h3>}
        <div className={styles.stepContent}>{children}</div>
      </div>
    </div>
  );
}
