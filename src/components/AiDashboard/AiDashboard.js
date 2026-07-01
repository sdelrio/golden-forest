import React, { useState, useEffect, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import CategoryFilter from './CategoryFilter';
import ToolCard from './ToolCard';
import ToolDetail from './ToolDetail';
import styles from './AiDashboard.module.css';

function AiDashboardInternal() {
  const [tools, setTools] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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
          .catch((err) => setError(err.message));
      });
  }, [toolsUrl]);

  const counts = useMemo(() => {
    const c = { total: tools.length };
    tools.forEach((t) => {
      c[t.category] = (c[t.category] || 0) + 1;
    });
    return c;
  }, [tools]);

  const filtered = useMemo(() => {
    let result = tools;
    if (selectedCategory !== 'all') {
      result = result.filter((t) => t.category === selectedCategory);
    }
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          (t.tags && t.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }
    return result;
  }, [tools, selectedCategory, searchText]);

  if (error) {
    return <div className={styles.error}>Error loading dashboard: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.title}>AI Agent Dashboard</h1>
            <p className={styles.subtitle}>
              {tools.length} tools, agents, and resources for AI-powered development
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
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} onSelect={setSelectedTool} />
        ))}
        {filtered.length === 0 && (
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
