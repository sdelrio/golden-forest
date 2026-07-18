import React from 'react';
import Layout from '@theme/Layout';
import StaleContentDashboard from '../../components/StaleContentDashboard/StaleContentDashboard';

export default function StaleContentPage() {
  return (
    <Layout
      title="Stale Content Dashboard"
      description="Overview of content freshness across all documentation."
    >
      <main style={{ padding: '2rem 1rem' }}>
        <StaleContentDashboard />
      </main>
    </Layout>
  );
}
