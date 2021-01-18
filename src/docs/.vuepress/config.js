module.exports = {
  title: 'Web Booster Pack',
  base: "/web-booster-pack/",
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/toshifumiimanishi/web-booster-pack'}
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
