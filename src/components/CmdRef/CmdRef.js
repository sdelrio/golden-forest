import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Skeleton } from 'boneyard-js/react';
import CommandCard from './CommandCard';
import CommandDetail from './CommandDetail';
import useSearchFilter from '../../hooks/useSearchFilter';
import cmdRefCardBones from '../../bones/cmd-ref-card.bones.json';
import withBrowserOnly from '../../utils/withBrowserOnly';
import styles from './CmdRef.module.css';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'git', label: 'Git' },
  { id: 'package-managers', label: 'Package Managers' },
  { id: 'make', label: 'Make' },
  { id: 'taskfile', label: 'Taskfile' },
  { id: 'docusaurus', label: 'Docusaurus' },
  { id: 'opencode', label: 'OpenCode' },
  { id: 'claude-code', label: 'Claude Code' },
  { id: 'misc', label: 'Misc' },
];

function filterCommands(cmd, searchText, selectedCategory, toolFilter) {
  if (toolFilter && cmd.tool !== toolFilter) return false;
  if (selectedCategory !== 'all' && cmd.category !== selectedCategory) return false;
  if (searchText.trim()) {
    const q = searchText.toLowerCase();
    return (
      cmd.syntax.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.tool.toLowerCase().includes(q) ||
      (cmd.tags && cmd.tags.some((tag) => tag.toLowerCase().includes(q)))
    );
  }
  return true;
}

function CmdRefInternal({ tool }) {
  const [commands, setCommands] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [selectedCommand, setSelectedCommand] = useState(null);

  const commandsUrl = useBaseUrl('/cmd-reference');

  useEffect(() => {
    fetch(`${commandsUrl}/commands.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load commands data');
        return res.json();
      })
      .then((data) => setCommands(data))
      .catch((err) => setFetchError(err.message));
  }, [commandsUrl]);

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
    items: commands,
    filterFn: (cmd, search, cat) => filterCommands(cmd, search, cat, tool),
    external: true,
  });

  if (fetchError || error) {
    return (
      <div className={styles.error}>Error loading commands: {fetchError || error}</div>
    );
  }

  const title = tool ? `${tool} Commands` : 'CLI Command Reference';
  const subtitle = tool
    ? `Commands for ${tool}`
    : `${commands ? commands.length : '—'} commands across tools and workflows`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>

      <div className={styles.searchRow}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search commands, tools, tags..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'all' ? counts.total : (counts[cat.id] || 0);
          if (cat.id !== 'all' && count === 0) return null;
          return (
            <button
              key={cat.id}
              className={`${styles.pill} ${selectedCategory === cat.id ? styles.active : ''}`}
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
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton
                key={`skeleton-${i}`}
                name="cmd-ref-card"
                loading={true}
                initialBones={cmdRefCardBones}
                animate="shimmer"
              >
                <div style={{ height: cmdRefCardBones.height }} />
              </Skeleton>
            ))
          : filtered.map((cmd) => (
              <CommandCard key={cmd.id} command={cmd} onSelect={setSelectedCommand} />
            ))
        }
        {!isLoading && filtered.length === 0 && (
          <div className={styles.empty}>No commands match your search.</div>
        )}
      </div>

      {selectedCommand && (
        <CommandDetail command={selectedCommand} onClose={() => setSelectedCommand(null)} />
      )}
    </div>
  );
}

export default withBrowserOnly(CmdRefInternal, {
  fallback: <div className={styles.loading}>Loading commands...</div>,
});
