/**
 * Bookmark Button — injects a bookmark toggle into doc page footers.
 * Uses event delegation on DOM mutations. Registered via docusaurus.config.js clientModules.
 */
if (typeof document !== 'undefined') {
  const STORAGE_KEY = 'readingList';

  function getList() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function save(slug, data) {
    const list = getList();
    list[slug] = { ...(list[slug] || { bookmarked: false, read: false, progress: 0, lastRead: null }), ...data, lastRead: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function getSlug() {
    return window.location.pathname.replace(/^\/|\/$/g, '');
  }

  function isBookmarked(slug) {
    return getList()[slug]?.bookmarked || false;
  }

  function createButton() {
    const slug = getSlug();
    const bookmarked = isBookmarked(slug);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rl-bookmark-btn';
    btn.style.cssText = `
      display: inline-flex; align-items: center; gap: 6px;
      padding: 6px 12px; border-radius: 9999px;
      border: 1px solid var(--ifm-color-emphasis-300);
      background: transparent; color: var(--ifm-color-emphasis-700);
      font-size: 0.8125rem; cursor: pointer; transition: all 0.15s ease;
    `;
    btn.title = bookmarked ? 'Remove from reading list' : 'Add to reading list';

    function render() {
      const active = isBookmarked(slug);
      btn.innerHTML = active
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><span>Saved</span>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><span>Save</span>';
      btn.style.background = active ? 'var(--ifm-color-primary)' : 'transparent';
      btn.style.borderColor = active ? 'var(--ifm-color-primary)' : '';
      btn.style.color = active ? '#fff' : '';
    }

    render();

    btn.addEventListener('click', () => {
      save(slug, { bookmarked: !isBookmarked(slug) });
      render();
    });

    return btn;
  }

  function inject() {
    const footer = document.querySelector('.theme-doc-footer');
    if (!footer) return;
    if (footer.parentElement.querySelector('.rl-bookmark-btn')) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; justify-content: flex-end; margin: 1rem 0;';
    wrapper.appendChild(createButton());
    footer.parentElement.insertBefore(wrapper, footer);
  }

  const observer = new MutationObserver(() => {
    if (document.querySelector('.theme-doc-footer')) {
      inject();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  inject();
}
