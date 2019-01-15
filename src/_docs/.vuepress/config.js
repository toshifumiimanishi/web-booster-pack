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
      { text: 'Components', link: '/components/'},
      { text: 'GitHub', link: 'https://github.com/toshifumiimanishi/website-boilerplate'}
    ],
    sidebar: [
      '/components/',
    ]
  }
}
