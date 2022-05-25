// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

const mainGithubUrl = "https://github.com/h8r-dev/heighliner";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Heighliner",
  tagline: "Speed Up Cloud Native Application Development",
  url: "https://heighliner.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/website.ico",
  organizationName: "h8r-dev", // Usually your GitHub org/user name.
  projectName: "heighliner", // Usually your repo name.

  staticDirectories: ['static'],

  customFields: {
    quickStartUrl: "/docs/getting_started/installation",
    docsUrl: "/docs/overview/intro",
    blogUrl: "/blog",
    contactUs: "/contact-us",
    githubUrl: mainGithubUrl,
    discordUrl: 'https://discord.gg/WphTbdVHFA',
    ginNextStackUrl: '/docs/tutorials/gin_nextjs',
    ginVueStackUrl: '/docs/tutorials/gin_vue',
    remixStackUrl: '/docs/tutorials/remix',
    sprintVueStackUrl: '/docs/tutorials/spring_vue',
    newsletterUrl: 'https://heighliner.substack.com/',
    email: "hr@h8r.io",
    contactEmail: "contact@h8r.io",
    wechat: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkzMTM1MDEyOA==&scene=124#wechat_redirect",
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
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "navbar-logo",
          src: "/img/homepage/slogansection/purple-logo@3x.webp",
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
                to: "/docs/getting_started/installation",
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
              {
                label: "Privacy policy",
                to: "/privacy-policy"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Heighliner, Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      algolia: {
        appId: 'U4KQYASQJZ',
        apiKey: '232ec1aa85b14f42f196b5dea41fbac8',
        indexName: 'heighliner-docs',
        contextualSearch: false,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
  ],
};

async function createConfig() {
  const urlLoader =(await import ('./plugins/UrlLoader.mjs')).default;
  config.plugins?.push(urlLoader);

  if (process.env.NODE_ENV === 'production') {
    // Add buildInfoPlugin
    const buildInfoPlugin = (await import('./plugins/ConsoleBuildInfo.bak.mjs')).default
    config.plugins?.push(buildInfoPlugin)
    // Add Google Analytics
    config.presets[0][1].gtag = {
      trackingID: "G-S5552XPQDK",
    }
  }
  return config
}

module.exports = createConfig;
