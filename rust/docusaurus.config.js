// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
   //*****TotemTemplate*****
  title: 'Insect Totem',
   //*****TotemTemplate*****
  tagline: 'Rust 學習筆記',
  favicon: 'img/70_70.jpg',

  // Set the production url of your site here
     //*****TotemTemplate*****
  //url: 'https://chichunhuang.github.io',
  url: 'https://rust.insect-totem.net',
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/vintage/', // gitpages: set same as projectName 
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chichunhuang', // Usually your GitHub org/user name.
  //*****TotemTemplate*****
  projectName: 'vintage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['en','zh-tw'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
      
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,// not works, show wrong date
          
          //when click banner link, sidebar is collapsed
          sidebarCollapsed:true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
        gtag: {
          trackingID: 'G-Z1DF5K597H',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/800_374.jpg',
      navbar: {
           //*****TotemTemplate*****
        title: 'Totem\'s',
        logo: {
          alt: 'Site Logo of Totem\'s',
          src: 'img/70_70.jpg',
        },
		
		// when page scroll down, the menu banner will be displayed or not
        hideOnScroll: true,
		
        items: [
          {
            type: 'docSidebar', // 在 docs folder下的文章 
            sidebarId: 'totem_sidebar', //ref sidebar.js
            position: 'left',
               //*****TotemTemplate*****
            label: 'Rust 學習筆記',
          },
          {
            href: 'https://python.insect-totem.net/',
            label: 'Python 學習紀錄',
            position: 'left',
          },

          // {to: '/docs/Graphics/docs-map', label: 'Graphics', position: 'left'},
          
	      {to: '/blog', label: 'Blog', position: 'left'},
	      
          //{
          //  href: 'https://chichunhuang.github.io/slash/blog',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Insect Totem 主站',
                href: 'https://insect-totem.net/',
              },
              {
                label: 'Python 學習紀錄',
                href: 'https://python.insect-totem.net/',
              },
              {
                label: 'Rust 學習紀錄',
                href: 'https://rust.insect-totem.net/',
              },
            ],
          },
          
        {

            items: [
              {
                label: 'Burny\'s Gallery : 布妮的美術作品區',
                href: 'https://chichunhuang.github.io/burning/',
              },
              {
                label: 'Rain\'s Math Zone: Rain 的學習檔案',
                href: 'https://chichunhuang.github.io/rain/',
              },
            ],
          },
        {

            title: 'About Me',
            items: [
              {
                label: '曾經以為自己會當一個生物學家，後來發現生物學家總是用老方法做事。所以開始開發系統輔佐生物學家進行研究。',
                href: 'https://insect-totem.net/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Insec Totem, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
