import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import styles from './Accordion.module.css';

export default function Accordion({ children, title, icon, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const iconName = icon ? (icon.includes(':') ? icon : `mdi:${icon}`) : null;

  return (
    <div className={clsx(styles.accordionContainer, isOpen && styles.containerOpen)}>
      <button 
        className={styles.accordionHeader} 
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {iconName && (
          <div className={styles.accordionIcon}>
            <Icon icon={iconName} />
          </div>
        )}
        <span className={styles.accordionTitle}>{title}</span>
        <div className={clsx(styles.chevron, isOpen && styles.chevronOpen)}>
          <Icon icon="mdi:chevron-down" />
        </div>
      </button>
      <div className={clsx(styles.accordionContent, isOpen && styles.contentOpen)}>
        <div className={styles.innerContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
