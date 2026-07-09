/**
 * View Transitions API – circular-mask theme toggle animation.
 * Uses event delegation (capturing phase) to intercept clicks on
 * Docusaurus's built-in ColorModeToggle without swizzling the component.
 * Falls back to instant toggle on browsers without startViewTransition.
 *
 * Runs at module load time (top-level) so the listener is active before
 * React hydrates. Registered via docusaurus.config.js clientModules.
 *
 * @see https://theme-toggle.rdsx.dev
 * @see https://github.com/rudrodip/theme-toggle-effect
 */
if (typeof document !== 'undefined' && document.startViewTransition) {
  let inTransition = false;

  document.addEventListener(
    'click',
    (e) => {
      if (inTransition) return;

      const btn = e.target.closest('.clean-btn[title]');
      if (!btn) return;

      const title = btn.getAttribute('title');
      if (title !== 'light mode' && title !== 'dark mode') return;

      e.stopPropagation();
      inTransition = true;

      document
        .startViewTransition(() => {
          btn.click();
        })
        .finished.then(() => {
          inTransition = false;
        })
        .catch(() => {
          inTransition = false;
        });
    },
    true,
  );
}
