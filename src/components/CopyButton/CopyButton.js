import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { copyToClipboard } from '../../utils/clipboard';
import styles from './CopyButton.module.css';

export default function CopyButton({
  text,
  variant = 'icon',
  disabled = false,
  className,
  children,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled) return;
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'icon') {
    return (
      <button
        className={clsx(styles.copyBtn, styles.icon, copied && styles.copiedIcon, className)}
        onClick={handleCopy}
        type="button"
        title="Copy to clipboard"
      >
        <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} width={16} />
        {copied && <span className={styles.copiedHint}>Copied!</span>}
      </button>
    );
  }

  return (
    <button
      className={clsx(
        styles.copyBtn,
        styles.button,
        copied && styles.copiedBtn,
        className,
      )}
      onClick={handleCopy}
      type="button"
      disabled={disabled}
    >
      {copied ? 'Copied!' : children}
    </button>
  );
}
