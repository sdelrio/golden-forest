import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import TemplateCard from './TemplateCard';
import LiveEditor from './LiveEditor';
import useSearchFilter from '../../hooks/useSearchFilter';
import withBrowserOnly from '../../utils/withBrowserOnly';
import styles from './MermaidPlayground.module.css';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'flowchart', label: 'Flowchart' },
  { id: 'sequence', label: 'Sequence' },
  { id: 'class', label: 'Class' },
  { id: 'state', label: 'State' },
  { id: 'er', label: 'ER' },
  { id: 'gantt', label: 'Gantt' },
  { id: 'pie', label: 'Pie' },
  { id: 'mindmap', label: 'Mindmap' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'gitgraph', label: 'Git Graph' },
  { id: 'xychart', label: 'XY Chart' },
  { id: 'treeview', label: 'TreeView' },
  { id: 'radar', label: 'Radar' },
];

function filterTemplates(tpl, searchText, selectedCategory) {
  if (selectedCategory !== 'all' && tpl.category !== selectedCategory) return false;
  if (searchText.trim()) {
    const q = searchText.toLowerCase();
    return (
      tpl.name.toLowerCase().includes(q) ||
      tpl.description.toLowerCase().includes(q) ||
      (tpl.tags && tpl.tags.some((tag) => tag.toLowerCase().includes(q)))
    );
  }
  return true;
}

function MermaidPlaygroundInternal() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templatesUrl = useBaseUrl('/mermaid-templates');

  const {
    filtered,
    counts,
    error,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
  } = useSearchFilter({
    url: `${templatesUrl}/templates.json`,
    filterFn: filterTemplates,
  });

  if (error) {
    return <div className={styles.error}>Error loading playground: {error}</div>;
  }

  if (selectedTemplate) {
    return (
      <LiveEditor
        template={selectedTemplate}
        onBack={() => setSelectedTemplate(null)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mermaid Diagram Playground</h1>
        <p className={styles.subtitle}>
          Browse templates, edit live, and copy Mermaid syntax for your docs
        </p>
      </div>

      <div className={styles.searchRow}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search templates..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'all' ? counts.total : (counts[cat.id] || 0);
          return (
            <button
              key={cat.id}
              className={clsx(styles.pill, selectedCategory === cat.id && styles.active)}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
            >
              <span className={styles.pillLabel}>{cat.label}</span>
              {count > 0 && <span className={styles.pillCount}>{count}</span>}
            </button>
          );
        })}
      </div>

      <div className={styles.grid}>
        {filtered.map((tpl) => (
          <TemplateCard key={tpl.id} template={tpl} onSelect={setSelectedTemplate} />
        ))}
        {filtered.length === 0 && (
          <div className={styles.empty}>No templates match your search.</div>
        )}
      </div>
    </div>
  );
}

export default withBrowserOnly(MermaidPlaygroundInternal, {
  fallback: <div className={styles.loading}>Loading playground...</div>,
});
