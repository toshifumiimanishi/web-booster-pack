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
      { text: 'Components', link: '/components/'}
    ],
    sidebar: [
      '/components/',
    ]
  }
}
