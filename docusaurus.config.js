// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Luke's Wiki",
  tagline: "Noting down and bookmarking stuff I care about",
  url: "https://lukeswiki.eu/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "lwojcik", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage
        // toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          {
            from: ["/docs/social-media/t2"],
            to: "/docs/social-media/pebble/index.md",
          },
        ],
        // createRedirects(existingPath) {
        //   if (existingPath.includes("/community")) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace("/community", "/docs/team"),
        //       existingPath.replace("/community", "/docs/support"),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/lwojcik/wiki/edit/main/",
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
        disableSwitch: false,
      },
      metadata: [{ rel: "me", href: "test" }],
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
      algolia: {
        // Application ID provided by Algolia
        appId: "6LD8XK0RNE",
        // Public API key
        apiKey: "ec2a491fecd6a0c04af2cf85f7eccbfb",
        indexName: "lukeseu",
      },
    }),
};

module.exports = config;
