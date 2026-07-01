import React from 'react';
import clsx from 'clsx';
import styles from './StatusBadge.module.css';

const COLORS = {
  high: { light: '#22c55e', dark: '#4ade80' },
  medium: { light: '#eab308', dark: '#facc15' },
  low: { light: '#ef4444', dark: '#f87171' },
};

function getLevel(score) {
  if (score >= 80) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
}

export default function StatusBadge({ score, size = 'md' }) {
  const level = getLevel(score);
  const color = COLORS[level];
  const radius = size === 'sm' ? 14 : size === 'lg' ? 28 : 20;
  const stroke = size === 'sm' ? 3 : size === 'lg' ? 5 : 4;
  const circumference = 2 * Math.PI * (radius - stroke);
  const offset = circumference - (score / 100) * circumference;
  const fontSize = size === 'sm' ? 10 : size === 'lg' ? 18 : 14;
  const svgSize = radius * 2;

  return (
    <div className={clsx(styles.badge, styles[size])} title={`Health: ${score}/100`}>
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          fill="none"
          stroke="var(--ifm-color-emphasis-200)"
          strokeWidth={stroke}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          fill="none"
          stroke={color.light}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
          className={styles.progress}
        />
      </svg>
      <span className={styles.score} style={{ fontSize }}>
        {score}
      </span>
    </div>
  );
}
