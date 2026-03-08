import React from 'react';

export default function ParamField({ path, type, children }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--ifm-color-emphasis-300)',
      padding: '1rem 0',
      marginBottom: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
        <code style={{
          color: 'var(--ifm-color-primary)',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>{path}</code>
        <span style={{
          color: 'var(--ifm-color-emphasis-600)',
          fontSize: '0.8rem',
          fontFamily: 'var(--ifm-font-family-monospace)'
        }}>{type}</span>
      </div>
      <div style={{ fontSize: '0.9rem' }}>{children}</div>
    </div>
  );
}
