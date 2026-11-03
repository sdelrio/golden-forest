import { useEffect } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Moves focus into the dialog on mount, keeps Tab inside it, and restores focus on unmount.
export default function useDialogFocus(panelRef) {
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return undefined;
    const previouslyFocused = document.activeElement;
    panel.focus();

    const trapTab = (e) => {
      if (e.key !== 'Tab') return;
      const items = [...panel.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener('keydown', trapTab);
    return () => {
      panel.removeEventListener('keydown', trapTab);
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [panelRef]);
}
