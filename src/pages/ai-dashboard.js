import React from 'react';
import Layout from '@theme/Layout';
import AiDashboard from '../components/AiDashboard/AiDashboard';

export default function AiDashboardPage() {
  return (
    <Layout
      title="AI Agent Dashboard"
      description="Interactive dashboard of AI tools, agents, MCPs, and models for AI-powered development."
    >
      <main style={{ padding: '2rem 1rem' }}>
        <AiDashboard />
      </main>
    </Layout>
  );
}
