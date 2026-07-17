import { useState, useEffect, useMemo } from 'react';

/**
 * Shared hook for fetch + category filter + text search.
 * Used by AiDashboard, MermaidPlayground, and CharSearch.
 *
 * @param {Object} opts
 * @param {string} opts.url - Fetch URL
 * @param {Function} [opts.transform] - Transform fetched data before state
 * @param {Function} opts.filterFn - (item, searchText, selectedCategory) => boolean
 * @param {string|Function} [opts.categoryKey='category'] - Property name or accessor for category
 * @param {string} [opts.defaultCategory='all'] - Default category value
 * @returns {{ items, filtered, counts, error, searchText, setSearchText, selectedCategory, setSelectedCategory, isLoading }}
 */
export default function useSearchFilter({
  url,
  items: externalItems,
  transform,
  filterFn,
  categoryKey = 'category',
  defaultCategory = 'all',
  external = false,
}) {
  const [internalItems, setInternalItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const items = (external ? externalItems : (externalItems != null ? externalItems : internalItems)) || [];

  useEffect(() => {
    if (external || externalItems != null) return;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load data: ${res.status}`);
        return res.json();
      })
      .then((data) => setInternalItems(transform ? transform(data) : data))
      .catch((err) => setError(err.message));
  }, [url, transform, externalItems, external]);

  const counts = useMemo(() => {
    const c = { total: items.length };
    items.forEach((item) => {
      const key = typeof categoryKey === 'function' ? categoryKey(item) : item[categoryKey];
      if (key != null) {
        c[key] = (c[key] || 0) + 1;
      }
    });
    return c;
  }, [items, categoryKey]);

  const filtered = useMemo(
    () => items.filter((item) => filterFn(item, searchText, selectedCategory)),
    [items, searchText, selectedCategory, filterFn],
  );

  const isLoading = external
    ? externalItems == null
    : externalItems == null && items.length === 0 && !error;

  return {
    items,
    filtered,
    counts,
    error,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    isLoading,
  };
}
