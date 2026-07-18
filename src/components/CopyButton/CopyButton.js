import React, { useRef, useState } from 'react';
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
  const [hintPos, setHintPos] = useState(null);
  const btnRef = useRef(null);

  const handleCopy = async () => {
    if (disabled) return;
    await copyToClipboard(text);
    if (variant === 'icon' && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setHintPos({ left: rect.left + rect.width / 2, top: rect.top - 4 });
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'icon') {
    return (
      <button
        ref={btnRef}
        className={clsx(styles.copyBtn, styles.icon, copied && styles.copiedIcon, className)}
        onClick={handleCopy}
        type="button"
        title="Copy to clipboard"
      >
        <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} width={16} />
        {copied && hintPos && (
          <span
            className={styles.copiedHint}
            style={{ left: hintPos.left, top: hintPos.top }}
          >
            Copied!
          </span>
        )}
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
