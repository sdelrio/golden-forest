const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'The Golden Forest',
  tagline: 'Digital garden',
  url: 'https://sdelrio.github.io',
  baseUrl: '/golden-forest/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Golden Forest',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs-intro',
            position: 'left',
            label: 'Docs',
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
            label: 'GitHub',
            position: 'right',
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
        copyright: `Copyright © ${new Date().getFullYear()} The Golden Forest proyect. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
