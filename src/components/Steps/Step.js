import React from 'react';
import styles from './Steps.module.css';

export default function Step({ children, title }) {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepIndicator} />
      <div className={styles.stepContentWrapper}>
        {title && <h3 className={styles.stepTitle}>{title}</h3>}
        <div className={styles.stepContent}>{children}</div>
      </div>
    </div>
  );
}
