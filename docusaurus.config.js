// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const mainGithubUrl = "https://github.com/h8r-dev/heighliner";

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

  customFields: {
    quickStartUrl: "/docs/getting_started/installation",
    docsUrl: "/docs/overview/intro",
    blogUrl: "/blog",
    githubUrl: mainGithubUrl,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/h8r-dev/heighliner-website",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/h8r-dev/heighliner-website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Heighliner",
        logo: {
          alt: "Heighliner Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "overview/intro",
            position: "right",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/h8r-dev/heighliner-website",
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
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
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
