import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CATEGORY_COLORS } from '../../constants/colors';
import styles from './LiveEditor.module.css';

export default function LiveEditor({ template, onBack }) {
  const [code, setCode] = useState(template.code);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedSvg, setCopiedSvg] = useState(false);
  const debounceRef = useRef(null);
  const containerRef = useRef(null);

  const color = CATEGORY_COLORS[template.category] || '#6b7280';

  const renderMermaid = useCallback(async (codeToRender) => {
    try {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'var(--ifm-font-family-base)',
      });
      const id = `mermaid-preview-${Date.now()}`;
      const { svg: rendered } = await mermaid.render(id, codeToRender);
      setSvg(rendered);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to render diagram');
      setSvg('');
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (code.trim()) {
        renderMermaid(code);
      } else {
        setSvg('');
        setError(null);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [code, renderMermaid]);

  // Re-render on theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (code.trim()) renderMermaid(code);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, [code, renderMermaid]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySvg = async () => {
    if (!svg) return;
    try {
      await navigator.clipboard.writeText(svg);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = svg;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      setCode(code.substring(0, start) + '  ' + code.substring(end));
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button className={styles.backBtn} onClick={onBack} type="button">
        &larr; Back to templates
      </button>

      <div className={styles.editorHeader}>
        <span className={styles.categoryBadge} style={{ background: color }}>
          {template.category}
        </span>
        <h2 className={styles.templateName}>{template.name}</h2>
      </div>

      <div className={styles.splitPane}>
        <div className={styles.pane}>
          <div className={styles.paneHeader}>
            <span>Code</span>
          </div>
          <textarea
            className={styles.editor}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter Mermaid syntax..."
            spellCheck={false}
          />
        </div>

        <div className={styles.pane}>
          <div className={styles.paneHeader}>
            <span>Preview</span>
          </div>
          <div className={styles.preview}>
            {error ? (
              <div className={styles.previewError}>{error}</div>
            ) : svg ? (
              <div dangerouslySetInnerHTML={{ __html: svg }} />
            ) : (
              <div className={styles.previewPlaceholder}>Start typing to see a preview</div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.copyBtn} ${copied ? styles.copiedBtn : ''}`}
          onClick={handleCopy}
          type="button"
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
        <button
          className={`${styles.copyBtn} ${copiedSvg ? styles.copiedBtn : ''}`}
          onClick={handleCopySvg}
          type="button"
          disabled={!svg}
        >
          {copiedSvg ? 'Copied!' : 'Copy SVG'}
        </button>
      </div>
    </div>
  );
}
