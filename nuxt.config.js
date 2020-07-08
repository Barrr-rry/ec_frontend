const webpack = require('webpack')
const env = require('dotenv').config({ path: `.env.${process.env.MODE}` })
export default {
  loading: {
    color: '#1aa4bd',
    height: '5px',
  },
  mode: 'universal',
  env: env.parsed,
  server: {
    host: '0.0.0.0',
    port: 3000,
    timeout: false
  },
  vue: {
    devtool: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'EZGO',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        name: 'renderer',
        content: 'webkit|ie-comp|ie-stand'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [
      { rel: 'shortcut icon', size: '48x48', href: '/assets/images/icon-48x48.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'icon', type: 'image/png', size: '192x192', href: '/assets/images/icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', size: '180x180', href: '/assets/images/icon-180x180.png' },
    ],
    script: [
      // todo cehck 外部 js
      // todo check i18n
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      },
      { src: '/js/jquery-ui.min.js' },
      { src: '/js/jquery.countdown.min.js' },
      { src: '/js/slick.min.js' },
      { src: '/js/jquery.easing.js' },
      { src: '/js/jquery.scrollUp.min.js' },
      { src: '/js/jquery.zoom.min.js' },
      { src: '/js/parallax.min.js' },
      { src: '/js/jquery.fancybox.js' },
      { src: '/js/numscroller-1.0.js' },
      { src: '/js/vanilla-tilt.min.js' },
      // {src: '/js/main.js'}
      // todo check 這兩個
      // { src: '@assets/js/messages.js"' },
      // { src: '@assets/js/vue_main.js"' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: [
    // '@/assets/css/style.css',
    '@/assets/css/custom_bootstrap.css',
    // '@/assets/sass/vendor/bootstrap.scss',
    '@/assets/css/normalize.css',
    '@/assets/css/fontawesome.css',
    '@/assets/css/elegant.css',
    '@/assets/css/animate.css',
    '@/assets/css/slick.css',
    '@/assets/css/scroll.css',
    '@/assets/css/icomoon.css',
    // '@/assets/css/jquery.fancybox.min.css',
    '@/assets/css/jquery-ui.css',
    '@/assets/sass/main.sass',
    // '@/assets/css/fixed.css',
    // '@/assets/css/index.css',
    // '@/assets/css/main.css',

  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/route', ssr: true },
    { src: '@/plugins/i18n', ssr: true },
    { src: '@/plugins/Tooltip', ssr: false },
    { src: '@/plugins/CookieToVuex', ssr: true },
    { src: '@/plugins/globalComponents', ssr: true },
    { src: '@/plugins/axiosPlugin', ssr: true },
    { src: '@/plugins/vueFilter', ssr: true },
    { src: '@/plugins/vueNotification', ssr: false },
    { src: '@/plugins/datepickPlugin', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 5 * 60 * 60
    }],
    'cookie-universal-nuxt',
    "~/modules/axCache",
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [
      // new webpack.ProvidePlugin({
      //   $: 'jquery',
      //   jQuery: 'jquery'
      // })
    ],
    extend(config, ctx) {
    }
  }
}
