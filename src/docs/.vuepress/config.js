module.exports = {
  title: 'Website Boilerplate',
  base: "/website-boilerplate/",
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/toshifumiimanishi/website-boilerplate'}
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
      },
      {
        title: 'Usage',
        collapsable: false,
        children: [
          '/usage/template-engine',
          '/usage/css-preprocessor',
        ],
      },
    ],
  }
}
