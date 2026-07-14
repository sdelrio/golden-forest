import { registerBones } from 'boneyard-js/react';
import aiDashboardCard from './ai-dashboard-card.bones.json';
import partySummary from './party-summary.bones.json';
import xmlChar from './xml-char.bones.json';
import xmlCharSmall from './xml-char-small.bones.json';
import charSearchCard from './char-search-card.bones.json';

registerBones({
  'ai-dashboard-card': aiDashboardCard,
  'party-summary': partySummary,
  'xml-char': xmlChar,
  'xml-char-small': xmlCharSmall,
  'char-search-card': charSearchCard,
});

if (typeof document !== 'undefined') {
  const syncDarkMode = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
  };

  syncDarkMode();

  const observer = new MutationObserver(syncDarkMode);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
}
