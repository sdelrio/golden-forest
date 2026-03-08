import React from 'react';
import styles from './Steps.module.css';

export default function Steps({ children }) {
  return (
    <div className={styles.stepsContainer}>
      {children}
    </div>
  );
}
