import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Skeleton } from 'boneyard-js/react';
import CategoryFilter from './CategoryFilter';
import ToolCard from './ToolCard';
import ToolDetail from './ToolDetail';
import useSearchFilter from '../../hooks/useSearchFilter';
import aiDashboardCardBones from '../../bones/ai-dashboard-card.bones.json';
import styles from './AiDashboard.module.css';

function filterTools(tool, searchText, selectedCategory) {
  if (selectedCategory !== 'all' && tool.category !== selectedCategory) return false;
  if (searchText.trim()) {
    const q = searchText.toLowerCase();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      (tool.tags && tool.tags.some((tag) => tag.toLowerCase().includes(q)))
    );
  }
  return true;
}

function AiDashboardInternal() {
  const [tools, setTools] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);

  const toolsUrl = useBaseUrl('/ai-dashboard');

  useEffect(() => {
    fetch(`${toolsUrl}/tools-enriched.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load enriched data');
        return res.json();
      })
      .then((data) => setTools(data.tools || []))
      .catch(() => {
        fetch(`${toolsUrl}/tools.json`)
          .then((res) => res.json())
          .then((data) => setTools(data))
          .catch((err) => setFetchError(err.message));
      });
  }, [toolsUrl]);

  const {
    filtered,
    counts,
    error,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    isLoading,
  } = useSearchFilter({
    items: tools,
    filterFn: filterTools,
  });

  if (fetchError || error) {
    return (
      <div className={styles.error}>Error loading dashboard: {fetchError || error}</div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>AI Agent Dashboard</h1>
            <p className={styles.subtitle}>
              {tools ? tools.length : '—'} tools, agents, and resources for AI-powered development
            </p>
          </div>
        </div>

        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search tools, agents, tags..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
          counts={counts}
        />
      </div>

      <div className={styles.grid}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton
                key={`skeleton-${i}`}
                name="ai-dashboard-card"
                loading={true}
                initialBones={aiDashboardCardBones}
                animate="shimmer"
              >
                <div style={{ height: aiDashboardCardBones.height }} />
              </Skeleton>
            ))
          : filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} onSelect={setSelectedTool} />
            ))
        }
        {!isLoading && filtered.length === 0 && (
          <div className={styles.empty}>No tools match your search.</div>
        )}
      </div>

      {selectedTool && (
        <ToolDetail tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </div>
  );
}

export default function AiDashboard() {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>Loading dashboard...</div>}>
      {() => <AiDashboardInternal />}
    </BrowserOnly>
  );
}
