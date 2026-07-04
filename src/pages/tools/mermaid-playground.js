import React from 'react';
import Layout from '@theme/Layout';
import MermaidPlayground from '../../components/MermaidPlayground/MermaidPlayground';

export default function MermaidPlaygroundPage() {
  return (
    <Layout
      title="Mermaid Playground"
      description="Interactive Mermaid diagram editor and template library"
    >
      <main style={{ padding: '2rem 1rem' }}>
        <MermaidPlayground />
      </main>
    </Layout>
  );
}
