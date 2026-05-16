import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import styles from './Accordion.module.css';

/**
 * Maps simple icon names to Iconify icon strings
 * Supports common names and fallbacks to game-icons if available
 */
const resolveIcon = (iconName) => {
  if (!iconName) return null;
  if (iconName.includes(':')) return iconName; // Already a full iconify name
  
  // Mapping some common ones to MDI or Game Icons
  const mapping = {
    'hammer': 'mdi:hammer',
    'layer-group': 'mdi:layers-triple',
    'gear': 'mdi:cog',
    'info': 'mdi:information',
    'warning': 'mdi:alert',
    'check': 'mdi:check-circle',
  };

  return mapping[iconName] || `mdi:${iconName}`; // Default to MDI
};

export default function Accordion({ children, title, icon, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const iconName = resolveIcon(icon);

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
