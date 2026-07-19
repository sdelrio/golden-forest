/**
 * Reading Progress — thin scroll-progress bar at top of viewport.
 * Auto-saves reading position per doc page to localStorage.
 * Registered via docusaurus.config.js clientModules.
 */
if (typeof document !== 'undefined') {
  const STORAGE_KEY = 'readingList';
  const BAR_HEIGHT = 3;

  function getSlug() {
    const path = window.location.pathname;
    const docsMatch = path.match(/\/docs\/(.+?)\/?$/);
    if (!docsMatch) return null;
    return docsMatch[1];
  }

  function getList() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveProgress(slug, progress) {
    const list = getList();
    const prev = list[slug] || { bookmarked: false, read: false, progress: 0, lastRead: null };
    list[slug] = { ...prev, progress, lastRead: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  let bar = null;
  let ticking = false;

  function onScroll() {
    if (ticking || !bar) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const slug = getSlug();
      if (!slug) {
        bar.style.width = '0%';
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        bar.style.width = '0%';
        return;
      }

      const progress = Math.min(100, Math.round((window.scrollY / scrollHeight) * 100));
      bar.style.width = `${progress}%`;

      if (progress % 10 === 0 || progress === 100) {
        saveProgress(slug, progress);
      }
    });
  }

  function init() {
    bar = document.createElement('div');
    bar.style.cssText = `
      position: fixed; top: 0; left: 0; z-index: 9999;
      height: ${BAR_HEIGHT}px; width: 0%;
      background: var(--ifm-color-primary, #4f46e5);
      transition: width 0.1s ease-out;
      pointer-events: none;
    `;
    document.body.appendChild(bar);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    onScroll();
    // Recalculate after hydration settles
    setTimeout(onScroll, 500);
    setTimeout(onScroll, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
