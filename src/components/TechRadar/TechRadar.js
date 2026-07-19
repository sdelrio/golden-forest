import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './TechRadar.module.css';

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function buildMermaidString(data) {
  const axisLine = `  axis ${data.axes.map((a) => `${slugify(a)}["${a}"]`).join(', ')}`;
  const curveLines = data.curves.map(
    (c) => `  curve ${slugify(c.label)}["${c.label}"] {${c.values.join(', ')}}`
  );
  return ['radar-beta', `  title ${data.title}`, axisLine, ...curveLines].join('\n');
}

async function renderRadar(mermaidCode) {
  const mermaid = (await import('mermaid')).default;
  mermaid.initialize({
    startOnLoad: false,
    theme:
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'default',
    securityLevel: 'loose',
    fontFamily: 'var(--ifm-font-family-base)',
    radar: {
      useMaxWidth: false,
      width: 900,
      height: 900,
      marginTop: 80,
      marginBottom: 40,
      marginLeft: 40,
      marginRight: 40,
    },
  });
  const id = `tech-radar-${Date.now()}`;
  const { svg } = await mermaid.render(id, mermaidCode);
  return svg;
}

function TechRadarInternal() {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dataRef = React.useRef(null);
  const dataUrl = useBaseUrl('/tech-radar/stack.json');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`Failed to load stack.json: ${res.status}`);
        const data = await res.json();
        dataRef.current = data;
        const mermaidCode = buildMermaidString(data);
        const rendered = await renderRadar(mermaidCode);
        if (!cancelled) {
          setSvg(rendered);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  useEffect(() => {
    if (!dataRef.current) return;
    const observer = new MutationObserver(() => {
      const mermaidCode = buildMermaidString(dataRef.current);
      renderRadar(mermaidCode).then((newSvg) => setSvg(newSvg));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  if (loading) return <div className={styles.loading}>Loading tech radar…</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.radarWrapper}>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}

export default function TechRadar() {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>Loading tech radar…</div>}>
      {() => <TechRadarInternal />}
    </BrowserOnly>
  );
}
