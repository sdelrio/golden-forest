import React, { useEffect, useId, useRef } from 'react';
import { Icon } from '@iconify/react';
import CopyButton from '../CopyButton/CopyButton';
import useDialogFocus from '../../hooks/useDialogFocus';
import styles from './CommandDetail.module.css';

export default function CommandDetail({ command, onClose }) {
  const panelRef = useRef(null);
  const titleId = useId();
  useDialogFocus(panelRef);
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.panel}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={panelRef}
      >
        <button className={styles.closeBtn} onClick={onClose} type="button" aria-label="Close details">
          <Icon icon="mdi:close" width={18} />
        </button>

        <div className={styles.header}>
          <span className={styles.toolBadge}>
            {command.tool}
          </span>
          <h2 className={styles.syntax} id={titleId}>{command.syntax}</h2>
          <p className={styles.description}>{command.description}</p>
        </div>

        <div className={styles.body}>
          {/* Syntax */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Command</h3>
            <div className={styles.codeBlock}>
              <code>{command.syntax}</code>
              <CopyButton text={command.syntax} />
            </div>
          </div>

          {/* Category */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Category</h3>
            <span className={styles.categoryBadge}>
              {command.category}
            </span>
          </div>

          {/* Tags */}
          {command.tags && command.tags.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tags</h3>
              <div className={styles.tagList}>
                {command.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
