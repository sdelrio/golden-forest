import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import StatusBadge from './StatusBadge';
import { CATEGORY_COLORS } from '../../constants/colors';
import { formatNumber, timeAgo } from '../../utils/format';
import { copyToClipboard } from '../../utils/clipboard';
import styles from './ToolDetail.module.css';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className={styles.copyBtn} onClick={handleCopy} type="button" title="Copy to clipboard">
      <span className="mdi mdi-content-copy" />
      {copied && <span className={styles.copiedHint}>Copied!</span>}
    </button>
  );
}

export default function ToolDetail({ tool, onClose }) {
  const docsUrl = useBaseUrl(tool.docPath);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const color = CATEGORY_COLORS[tool.category] || '#6b7280';

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.panel} onClick={(e) => e.stopPropagation()} role="dialog">
        <button className={styles.closeBtn} onClick={onClose} type="button" title="Close">
          <span className="mdi mdi-close" />
        </button>

        <div className={styles.header} style={{ borderLeftColor: color }}>
          <span className={styles.categoryBadge} style={{ background: color }}>
            {tool.category}
          </span>
          <h2 className={styles.name}>{tool.name}</h2>
          <p className={styles.description}>{tool.description}</p>
        </div>

        <div className={styles.body}>
          {/* Health Score */}
          {tool.healthScore != null && (tool.github || tool.npm) && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Health Score</h3>
              <div className={styles.healthRow}>
                <StatusBadge score={tool.healthScore} size="lg" />
                <div className={styles.healthDetails}>
                  {tool.github && (
                    <div className={styles.healthMetric}>
                      <span className={styles.metricLabel}>GitHub Stars</span>
                      <span className={styles.metricValue}>{formatNumber(tool.githubStars, { fallback: '—' })}</span>
                    </div>
                  )}
                  {tool.github && (
                    <div className={styles.healthMetric}>
                      <span className={styles.metricLabel}>Last Push</span>
                      <span className={styles.metricValue}>{timeAgo(tool.githubLastPush, { fallback: '—' })}</span>
                    </div>
                  )}
                  {tool.npm && tool.npmVersion && (
                    <div className={styles.healthMetric}>
                      <span className={styles.metricLabel}>npm Version</span>
                      <span className={styles.metricValue}>{tool.npmVersion}</span>
                    </div>
                  )}
                  {tool.github && (
                    <div className={styles.healthMetric}>
                      <span className={styles.metricLabel}>Open Issues</span>
                      <span className={styles.metricValue}>{tool.githubOpenIssues}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Install */}
          {tool.install && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Install</h3>
              <div className={styles.codeBlock}>
                <code>{tool.install}</code>
                <CopyButton text={tool.install} />
              </div>
            </div>
          )}

          {/* Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Links</h3>
            <div className={styles.links}>
              {tool.github && (
                <a className={styles.link} href={tool.github} target="_blank" rel="noopener noreferrer">
                  <span className="mdi mdi-github" /> GitHub
                </a>
              )}
              {tool.site && (
                <a className={styles.link} href={tool.site} target="_blank" rel="noopener noreferrer">
                  <span className="mdi mdi-web" /> Website
                </a>
              )}
              {tool.npm && (
                <a
                  className={styles.link}
                  href={`https://www.npmjs.com/package/${tool.npm}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mdi mdi-npm" /> npm
                </a>
              )}
              {tool.pip && (
                <a
                  className={styles.link}
                  href={`https://pypi.org/project/${tool.pip}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mdi mdi-language-python" /> PyPI
                </a>
              )}
              {tool.docPath && (
                <a className={styles.link} href={docsUrl}>
                  <span className="mdi mdi-file-document" /> Docs
                </a>
              )}
            </div>
          </div>

          {/* Supported By */}
          {tool.supportedBy && tool.supportedBy.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Works With</h3>
              <div className={styles.agentList}>
                {tool.supportedBy.map((agent) => (
                  <span key={agent} className={styles.agentBadge}>
                    {agent}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {tool.tags && tool.tags.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tags</h3>
              <div className={styles.tagList}>
                {tool.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}

          {/* License */}
          {tool.license && tool.license !== 'N/A' && tool.license !== 'Unknown' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>License</h3>
              <span className={styles.license}>{tool.license}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
