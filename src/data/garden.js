import useGlobalData from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Curated section copy. Counts are live: they come from the docs plugin's
 * global data, so the homepage never drifts from what is actually planted.
 */
export const SECTIONS = [
  {
    dir: 'Develop-Code',
    label: 'Develop & Code',
    blurb: 'AI agents, MCPs, prompt libraries, automation, databases, QA and architecture.',
  },
  {
    dir: 'Infrastructure-and-Cloud',
    label: 'Infrastructure & Cloud',
    blurb: 'Cloud platforms, containers, DevOps and networking.',
  },
  {
    dir: 'OS-and-Hardware',
    label: 'OS & Hardware',
    blurb: 'Linux, shell scripts and hardware notes from real machines.',
  },
  {
    dir: 'Security',
    label: 'Security',
    blurb: 'Hardening, OWASP, certificates and privacy.',
  },
  {
    dir: 'Homelab-Domotic',
    label: 'Homelab & Domotic',
    blurb: 'Home servers, backups, file sync, multimedia and home automation.',
  },
  {
    dir: 'Apps-and-utilities',
    label: 'Apps & Utilities',
    blurb: 'Terminals, editors, office alternatives and secret managers.',
  },
  {
    dir: 'Games',
    label: 'Games',
    blurb: 'D&D and Quest 3: character sheets, rules and Fantasy Grounds data.',
  },
  {
    dir: 'Productivity',
    label: 'Productivity',
    blurb: 'AI engineering from scratch, written down as it is learned.',
  },
];

export const TOOLS = [
  {
    label: 'AI Dashboard',
    to: '/ai-dashboard/',
    blurb: 'AI tools, agents, MCPs and models, filterable by category.',
  },
  {
    label: 'Tech Radar',
    to: '/tech-radar/',
    blurb: 'The stack this site runs on, current versus target proficiency.',
  },
  {
    label: 'Character Browser',
    to: '/docs/Games/DnD/FantasyGrounds/char-view/',
    blurb: 'Fantasy Grounds sheets rendered from their real XML.',
  },
  {
    label: 'Point Buy',
    to: '/docs/Games/DnD/character-creation/',
    blurb: 'Ability scores by point buy, standard array or dice.',
  },
  {
    label: 'Current Party',
    to: '/docs/Games/DnD/FantasyGrounds/current-party/',
    blurb: 'The party as it stands, generated from the sheets.',
  },
];

export const START_HERE = [
  { label: 'What this garden is', to: '/docs/docs-intro/' },
  { label: 'Add content (tutorial)', to: '/tutorial/tutorial-intro/' },
  { label: 'Journal', to: '/blog/' },
];

export function useGarden() {
  const { siteConfig } = useDocusaurusContext();
  const globalData = useGlobalData();
  const docs =
    globalData['docusaurus-plugin-content-docs']?.default?.versions?.[0]?.docs ?? [];

  const sections = SECTIONS.map((section) => {
    const root = `/docs/${section.dir}/`;
    return {
      ...section,
      to: root,
      // The section landing page is not a note; it is the bed.
      count: docs.filter((doc) => doc.path.startsWith(root) && doc.path !== root).length,
    };
  });

  return {
    title: siteConfig.title,
    tagline: siteConfig.tagline,
    total: sections.reduce((sum, section) => sum + section.count, 0),
    sections,
    tools: TOOLS,
    startHere: START_HERE,
  };
}
