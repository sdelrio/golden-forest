/**
 * Fallback search activator - issue #247.
 * Detects Algolia DocSearch unavailability and opens a local MiniSearch
 * overlay (see src/components/FallbackSearch). Detection strategies:
 *  1. Clicking the DocSearch button but no dialog appears within 2.5s
 *     (widget failed to load, API key/index unavailable).
 *  2. Always-available shortcut: Cmd/Ctrl+Shift+F.
 * Registered via docusaurus.config.js clientModules.
 */
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

if (typeof document !== 'undefined') {
  let root = null;

  async function open() {
    const { default: FallbackSearch } = await import(
      '../components/FallbackSearch/FallbackSearch'
    );
    if (!root) {
      const mount = document.createElement('div');
      document.body.appendChild(mount);
      root = createRoot(mount);
    }
    render(true);
    function render(openState) {
      root.render(
        createElement(FallbackSearch, {
          open: openState,
          onClose: () => render(false),
        })
      );
    }
  }

  // 1. Detect failed Algolia widget load on DocSearch button click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.DocSearch-Button')) return;
    setTimeout(() => {
      const dialogOpen =
        document.querySelector('.DocSearch-Modal') ||
        document.querySelector('.DocSearch--active');
      if (!dialogOpen) open();
    }, 2500);
  });

  // 2. Manual shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'f') {
      e.preventDefault();
      open();
    }
  });
}
