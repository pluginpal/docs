import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pluginpal Documentation',
  tagline: "All of Pluginpal's plugin documentation in one place",
  favicon: 'img/favicon.ico',

  plugins: ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://docs.pluginpal.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pluginpal', // Usually your GitHub org/user name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pluginpal/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/scss/__index.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'config-sync/getting-started/installation',
          position: 'left',
          label: 'Config Sync',
        },
        {
          type: 'doc',
          docId: 'webtools/intro',
          position: 'left',
          label: 'Webtools'
        },
        {
          href: 'https://github.com/pluginpal',
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
              label: 'Config Sync',
              to: '/config-sync',
            },
            {
              label: 'Webtools',
              to: '/webtools',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/strapi',
            },
            {
              label: 'Forum',
              href: 'https://forum.strapi.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://www.pluginpal.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pluginpal',
            },
          ],
        },
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
