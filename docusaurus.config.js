const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Life Optimization Manifesto",
  tagline: "For a better life",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "enlightenedExplorer", // Usually your GitHub org/user name.
  projectName: "LifeOptimizationManifesto", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "book",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/EnlightenedExplorer/LifeOptimizationManifesto/tree/main/book",
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
      navbar: {
        title: "Life Optimization Manifesto",
        logo: {
          alt: "Website Logo - A colored brain",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Book",
          },
          {
            href: "https://discord.gg/hQPKCZYVmq",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/EnlightenedExplorer/LifeOptimizationManifesto",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Optimal Life Manifesto. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
