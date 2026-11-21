/**
 * Swizzled @theme/Mermaid.
 *
 * Docusaurus only lets the theme *name* change with the colour mode; `options`
 * is shared. Reading the colour mode here is the only way to swap the whole
 * themeVariables table, which is what the Ink Plate style needs.
 */
import React, { useEffect, useRef } from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { ErrorBoundaryErrorMessageFallback, useColorMode } from '@docusaurus/theme-common';
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from '@docusaurus/theme-mermaid/client';
import { mermaidConfig } from '../mermaidTheme';

// Stable identity: mermaid.initialize mutates shared state, so a fresh config
// object per component makes concurrent renders fight over the singleton.
const CONFIG = { light: mermaidConfig('light'), dark: mermaidConfig('dark') };

function MermaidRenderResult({ renderResult }) {
  const ref = useRef(null);
  useEffect(() => {
    renderResult.bindFunctions?.(ref.current);
  }, [renderResult]);
  return (
    <div
      ref={ref}
      className={MermaidContainerClassName}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: renderResult.svg }}
    />
  );
}

function MermaidRenderer({ colorMode, value }) {
  const config = CONFIG[colorMode] ?? CONFIG.light;
  const renderResult = useMermaidRenderResult({ text: value, config });
  if (renderResult === null) {
    return null;
  }
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid({ value }) {
  const { colorMode } = useColorMode();
  return (
    <ErrorBoundary
      fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}>
      {/* Keyed on the mode: a mode change must mount a fresh renderer, or the
          in-flight render and the new one collide on the same mermaid id and
          one of them resolves to an empty SVG. */}
      <MermaidRenderer key={colorMode} colorMode={colorMode} value={value} />
    </ErrorBoundary>
  );
}
