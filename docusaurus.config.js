// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Luke's Wiki",
  tagline: "Sharing what I know one note a time",
  url: "https://wiki.lukem.net/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lwojcik", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/lwojcik/wiki/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "Luke's Wiki",
        logo: {
          alt: "Luke's Wiki Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/lwojcik/wiki",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        style: "dark",
        copyright: `© ${new Date().getFullYear()} <a href="https://lukaszwojcik.net/">Łukasz Wójcik</a> &bull; Licence: <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> &bull; <a href="/privacy">Privacy policy</a>`,
      },
      // algolia: {
      //   // Application ID provided by Algolia
      //   // appId: "",
      //   // Public API key
      //   // apiKey: "",
      //   // indexName: "",
      // },
    }),
};

module.exports = config;
