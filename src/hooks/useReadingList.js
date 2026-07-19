import { useState, useEffect, useCallback, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useSearchFilter from './useSearchFilter';
import {
  getReadingList,
  updateEntry,
  removeEntry,
  exportJSON,
  importJSON,
} from '../utils/readingListStorage';

const CATEGORIES = ['all', 'bookmarked', 'read', 'unread'];

function mergeEntriesWithDocs(readingList, docs) {
  const docMap = {};
  docs.forEach((d) => {
    docMap[d.id] = d;
  });

  const entries = Object.entries(readingList).map(([slug, data]) => {
    const doc = docMap[slug] || {};
    return {
      slug,
      title: doc.title || slug.split('/').pop(),
      permalink: doc.permalink || `/${slug}`,
      description: doc.description || '',
      tags: doc.tags || [],
      lastUpdated: doc.lastUpdated || null,
      ...data,
    };
  });

  return entries.sort((a, b) => {
    if (a.bookmarked !== b.bookmarked) return b.bookmarked ? 1 : -1;
    return (b.lastRead || 0) - (a.lastRead || 0);
  });
}

function filterEntries(entry, searchText, selectedCategory) {
  const matchesSearch =
    !searchText ||
    entry.title.toLowerCase().includes(searchText.toLowerCase()) ||
    entry.description.toLowerCase().includes(searchText.toLowerCase());

  let matchesCategory = true;
  if (selectedCategory === 'bookmarked') matchesCategory = entry.bookmarked;
  else if (selectedCategory === 'read') matchesCategory = entry.read;
  else if (selectedCategory === 'unread') matchesCategory = !entry.read;

  return matchesSearch && matchesCategory;
}

export default function useReadingList() {
  const docsUrl = useBaseUrl('/freshness-index/freshness-index.json');
  const [readingList, setReadingList] = useState({});
  const [docs, setDocs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setReadingList(getReadingList());
    fetch(docsUrl)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setDocs(data))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, [docsUrl]);

  const entries = useMemo(
    () => mergeEntriesWithDocs(readingList, docs),
    [readingList, docs],
  );

  const refresh = useCallback(() => {
    setReadingList(getReadingList());
  }, []);

  const toggleBookmark = useCallback((slug) => {
    const list = getReadingList();
    const prev = list[slug] || { bookmarked: false, read: false, progress: 0 };
    updateEntry(slug, { bookmarked: !prev.bookmarked });
    setReadingList(getReadingList());
  }, []);

  const markRead = useCallback((slug, read = true) => {
    updateEntry(slug, { read });
    setReadingList(getReadingList());
  }, []);

  const updateProgress = useCallback((slug, progress) => {
    updateEntry(slug, { progress });
  }, []);

  const remove = useCallback((slug) => {
    removeEntry(slug);
    setReadingList(getReadingList());
  }, []);

  const counts = useMemo(() => {
    const c = { all: entries.length, bookmarked: 0, read: 0, unread: 0 };
    entries.forEach((e) => {
      if (e.bookmarked) c.bookmarked++;
      if (e.read) c.read++;
      else c.unread++;
    });
    return c;
  }, [entries]);

  const {
    filtered,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
  } = useSearchFilter({
    items: entries,
    filterFn: filterEntries,
    defaultCategory: 'all',
    external: true,
  });

  return {
    entries,
    filtered,
    counts,
    loaded,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    toggleBookmark,
    markRead,
    updateProgress,
    remove,
    refresh,
    exportJSON,
    importJSON,
  };
}
