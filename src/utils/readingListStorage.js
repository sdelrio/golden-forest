const STORAGE_KEY = 'readingList';

function isBrowser() {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

export function getReadingList() {
  if (!isBrowser()) return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function updateEntry(slug, patch) {
  if (!isBrowser()) return;
  const list = getReadingList();
  const prev = list[slug] || { bookmarked: false, read: false, progress: 0, lastRead: null };
  list[slug] = { ...prev, ...patch, lastRead: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function removeEntry(slug) {
  if (!isBrowser()) return;
  const list = getReadingList();
  delete list[slug];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function getEntry(slug) {
  return getReadingList()[slug] || null;
}

export function exportJSON() {
  const list = getReadingList();
  const blob = new Blob([JSON.stringify(list, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'reading-list.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function importJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (typeof data !== 'object' || data === null) throw new Error('Invalid format');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        resolve(data);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
