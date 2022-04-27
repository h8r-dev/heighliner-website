// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const mainGithubUrl = "https://github.com/h8r-dev/heighliner-website";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Heighliner",
  tagline: "Speed up Cloud Native Application Development",
  url: "https://heighliner.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/apple-touch-icon.png",
  organizationName: "h8r-dev", // Usually your GitHub org/user name.
  projectName: "heighliner-website", // Usually your repo name.

  staticDirectories: ['public', 'static'],

  customFields: {
    quickStartUrl: "/docs/getting_started/installation",
    docsUrl: "/docs/overview/intro",
    blogUrl: "/blog",
    githubUrl: mainGithubUrl,
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/h8r-dev/heighliner-website/blob/main/",
          docLayoutComponent: require.resolve('./src/themes/DocPage'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/h8r-dev/heighliner-website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "navbar-logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/h8r-dev/heighliner-website",
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/overview/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/heighliner",
              },
              {
                label: "GitHub",
                href: mainGithubUrl,
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About us",
                to: "/about-us",
              },
              {
                label: "Join us",
                href: "/join-us",
              },
              {
                label: "Contact us",
                href: "/contact-us",
              },
              {
                label: "Resources",
                href: "/resources",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Heighliner, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      algolia: {
        appId: 'U4KQYASQJZ',
        apiKey: '232ec1aa85b14f42f196b5dea41fbac8',
        indexName: 'heighliner-docs',
      },
      colorMode: {
        defaultMode: "light",
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
  ],
};

module.exports = config;
