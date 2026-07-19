import React from 'react';
import Layout from '@theme/Layout';
import TechRadar from '../components/TechRadar/TechRadar';

export default function TechRadarPage() {
  return (
    <Layout
      title="Tech Stack Radar"
      description="Interactive radar chart showing current vs target proficiency across the tech stack."
    >
      <main style={{ padding: '2rem 1rem' }}>
        <TechRadar />
      </main>
    </Layout>
  );
}
