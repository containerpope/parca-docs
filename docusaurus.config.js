const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Parca',
  tagline: 'Infrastructure-wide continuous profiling',
  url: 'https://parca.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Parca',
      logo: {
        alt: 'Parca Logo',
        src: 'img/logo.svg',
      },
      items: [
        //{
        //  type: 'doc',
        //  docId: 'intro',
        //  position: 'left',
        //  label: 'Tutorial',
        //},
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/parca-dev/parca',
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
              label: 'Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            //{
            //  label: 'Stack Overflow',
            //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //},
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            //{
            //  label: 'Blog',
            //  to: '/blog',
            //},
            {
              label: 'GitHub',
              href: 'https://github.com/parca-dev/parca',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Parca Project, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/parca-dev/parca.dev/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/parca-dev/parca.dev/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
