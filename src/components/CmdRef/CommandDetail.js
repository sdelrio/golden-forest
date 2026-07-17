import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import CopyButton from '../CopyButton/CopyButton';
import { CATEGORY_COLORS } from '../../constants/colors';
import styles from './CommandDetail.module.css';

export default function CommandDetail({ command, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const color = CATEGORY_COLORS[command.category] || '#6b7280';

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.panel} onClick={(e) => e.stopPropagation()} role="dialog">
        <button className={styles.closeBtn} onClick={onClose} type="button" title="Close">
          <Icon icon="mdi:close" width={18} />
        </button>

        <div className={styles.header} style={{ borderLeftColor: color }}>
          <span className={styles.toolBadge} style={{ background: color }}>
            {command.tool}
          </span>
          <h2 className={styles.syntax}>{command.syntax}</h2>
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
            <span className={styles.categoryBadge} style={{ background: color }}>
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
