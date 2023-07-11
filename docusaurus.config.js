// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// KaTeX

const math = require('remark-math');
const katex = require('rehype-katex');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
//(module.exports = {
const config = {
  title: 'The Golden Forest',
  tagline: 'Digital garden',
  url: 'https://www.lorien.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sdelrio', // Usually your GitHub org/user name.
  projectName: 'golden-forest', // Usually your repo name.
  //deploymentBranch: 'gh-pages',	//The name of the branch to deploy the static files to. This defaults to "gh-pages"


  plugins: [
    // ... Your other plugins.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-intro',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sdelrio/golden-forest/edit/master/',
          remarkPlugins: [math, require('mdx-mermaid')],  
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sdelrio/golden-forest/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  //themes: ['@docusaurus/theme-search-algolia'], 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        // The application ID provided by Algolia
        appId: '5VR022LUD5',

        // Public API key: it is safe to commit it
        apiKey: 'df83999fe52871d81bab9de4ef15dcba',

        indexName: 'loriencloud',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'www.lorien.cloud',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: 'The Golden Forest',
        hideOnScroll: true,
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'IT',
          },
          {
            to: '/tutorial/tutorial-intro',
            //type: 'doc',
            docId: 'tutorial-intro',
            position: 'left',
            label: 'Add content',
          },
          /*
          {
            type: 'doc',
            docId: 'tutorial-intro',
            position: 'left',
            label: 'Tutor',
          },
          */
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/sdelrio/golden-forest',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/docs-intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sdelrio/golden-forest',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Golden Forest project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
