import React from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.css';

export default function AccordionGroup({ children }) {
  return (
    <div className={clsx('accordion-group', styles.accordionGroup)}>
      {children}
    </div>
  );
}
