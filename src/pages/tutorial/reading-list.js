import React from 'react';
import Layout from '@theme/Layout';
import ReadingList from '../../components/ReadingList/ReadingList';

export default function ReadingListPage() {
  return (
    <Layout
      title="Reading List"
      description="Your personal reading list — bookmarked articles and reading progress."
    >
      <main style={{ padding: '2rem 1rem' }}>
        <ReadingList />
      </main>
    </Layout>
  );
}
