import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { getEntry, updateEntry } from '../../utils/readingListStorage';
import styles from './BookmarkButton.module.css';

export default function BookmarkButton({ slug, className }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const entry = getEntry(slug);
    setBookmarked(entry?.bookmarked || false);
  }, [slug]);

  const toggle = () => {
    const next = !bookmarked;
    updateEntry(slug, { bookmarked: next });
    setBookmarked(next);
  };

  return (
    <button
      type="button"
      className={clsx(styles.btn, bookmarked && styles.active, className)}
      onClick={toggle}
      title={bookmarked ? 'Remove from reading list' : 'Add to reading list'}
      aria-label={bookmarked ? 'Remove from reading list' : 'Add to reading list'}
    >
      <Icon icon={bookmarked ? 'mdi:star' : 'mdi:star-outline'} width={18} />
      <span className={styles.label}>
        {bookmarked ? 'Saved' : 'Save'}
      </span>
    </button>
  );
}
