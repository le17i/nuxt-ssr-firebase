module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-ssr-firebse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A labs using Nuxt SSR with Firebase hosting and functions' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  buildDir: '../functions/nuxt',
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/',
		vendor: ['axios'],
    extractCSS: true,
    babel: {
      presets: [
        'es2015',
        'stage-0'
      ],
      plugins: [
        [
          'transform-runtime',
          {
            'polifill': true,
            'regenerator': true
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: [/(node_modules)/,/(functions)/]
        })
      }
    }
  }
}

