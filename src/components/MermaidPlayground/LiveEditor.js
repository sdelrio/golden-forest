import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { CATEGORY_COLORS } from '../../constants/colors';
import CopyButton from '../CopyButton/CopyButton';
import styles from './LiveEditor.module.css';

export default function LiveEditor({ template, onBack }) {
  const [code, setCode] = useState(template.code);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);
  const containerRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const color = CATEGORY_COLORS[template.category] || '#6b7280';

  // null = follow site color mode; true/false = explicit override
  const [darkOverride, setDarkOverride] = useState(null);
  const { colorMode } = useColorMode();
  const isDark = darkOverride ?? colorMode === 'dark';

  const renderMermaid = useCallback(async (codeToRender, theme) => {
    try {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: theme,
        securityLevel: 'loose',
        fontFamily: 'var(--ifm-font-family-base)',
        flowchart: { useMaxWidth: false },
        sequence: { useMaxWidth: false },
        class: { useMaxWidth: false },
        state: { useMaxWidth: false },
        er: { useMaxWidth: false },
        gantt: { useMaxWidth: false },
        pie: { useMaxWidth: false },
        mindmap: { useMaxWidth: false },
        architecture: { useMaxWidth: false },
        gitGraph: { useMaxWidth: false },
        xychart: { useMaxWidth: false },
        radar: { useMaxWidth: false },
        treeView: { useMaxWidth: false },
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

  const renderThemeRef = useRef(isDark);
  useEffect(() => {
    if (renderThemeRef.current === isDark) return;
    renderThemeRef.current = isDark;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (code.trim()) {
      renderMermaid(code, isDark ? 'dark' : 'default');
    }
  }, [isDark, code, renderMermaid]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (code.trim()) {
        renderMermaid(code, isDark ? 'dark' : 'default');
      } else {
        setSvg('');
        setError(null);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [code, isDark, renderMermaid]);

  // Re-render on site theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (code.trim()) renderMermaid(code, isDark ? 'dark' : 'default');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, [code, isDark, renderMermaid]);

  const lineCount = code.split('\n').length;

  const handleEditorScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
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
          <div className={styles.editorBody}>
            <div className={styles.lineNumbers} ref={lineNumbersRef}>
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i + 1}>{i + 1}</span>
              ))}
            </div>
            <textarea
              className={styles.editor}
              aria-label="Mermaid diagram code editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onScroll={handleEditorScroll}
              onKeyDown={handleKeyDown}
              placeholder="Enter Mermaid syntax..."
              spellCheck={false}
            />
          </div>
        </div>

        <div className={styles.pane}>
          <div className={styles.paneHeader}>
            <span>Preview</span>
            <button
              className={styles.themeToggle}
              type="button"
              aria-label={isDark ? 'Switch diagram to light theme' : 'Switch diagram to dark theme'}
              aria-pressed={isDark}
              onClick={() => setDarkOverride(!isDark)}
            >
              {isDark ? 'Dark' : 'Light'}
            </button>
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
        <CopyButton text={code} variant="button">
          Copy Code
        </CopyButton>
        <CopyButton text={svg} variant="button" disabled={!svg}>
          Copy SVG
        </CopyButton>
      </div>
    </div>
  );
}
