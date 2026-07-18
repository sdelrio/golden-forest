import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './FreshnessBadge.module.css';

const THRESHOLDS = {
  fresh: 60,
  stale: 180,
};

function getFreshnessLevel(daysSinceUpdate) {
  if (daysSinceUpdate < THRESHOLDS.fresh) return 'fresh';
  if (daysSinceUpdate <= THRESHOLDS.stale) return 'stale';
  return 'outdated';
}

function getLabel(level) {
  switch (level) {
    case 'fresh':
      return 'Fresh';
    case 'stale':
      return 'Stale';
    case 'outdated':
      return 'Outdated';
    default:
      return 'Unknown';
  }
}

function getGitHubIssueUrl(pageTitle) {
  const title = encodeURIComponent(`docs: update "${pageTitle}"`);
  const labels = encodeURIComponent('content-freshness');
  return `https://github.com/sdelrio/golden-forest/issues/new?title=${title}&labels=${labels}`;
}

export default function FreshnessBadge({
  lastUpdated,
  showSuggestUpdate = true,
  size = 'sm',
}) {
  const { siteConfig } = useDocusaurusContext();

  if (!lastUpdated) return null;

  const now = new Date();
  const updated = new Date(lastUpdated);
  const diffMs = now - updated;
  const daysSinceUpdate = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const level = getFreshnessLevel(daysSinceUpdate);
  const label = getLabel(level);
  const isStale = level === 'stale' || level === 'outdated';

  const pageTitle =
    typeof document !== 'undefined'
      ? document.querySelector('article h1')?.textContent || 'Untitled'
      : 'Untitled';

  return (
    <div className={clsx(styles.badge, styles[level], styles[size])}>
      <span className={styles.dot} />
      <span className={styles.label}>{label}</span>
      {isStale && showSuggestUpdate && (
        <a
          href={getGitHubIssueUrl(pageTitle)}
          className={styles.suggestLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Suggest update
        </a>
      )}
    </div>
  );
}
