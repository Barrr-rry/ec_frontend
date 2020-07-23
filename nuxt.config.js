const webpack = require('webpack')
const env = require('dotenv').config({path: `.env.${process.env.MODE}`})
export default {
  loading: {
    color: '#88c74a',
    height: '5px'
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
  // 開始加入GA code
  'google-gtag': {
    id: 'UA-145327369-3', // 必填，請填寫剛申請到的追蹤碼ID
    config: {
      // 這裡是填寫對gtag的需求選項」
      anonymize_ip: true,
      send_page_view: false, // 避免頁面刷新時後的重複追蹤
      linker: { // 跨域追蹤，追蹤兩個相關但不同網域的頁面
        domains: ['ezgo-buy.com', 'li1593-188.members.linode.com']
      }
    },
    debug: true, // 允許在開發中進行追蹤
    disableAutoPageTrack: false // 關閉追蹤每個頁面路由
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'EC',
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0'
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'shortcut icon', href: '@/assets/images/shortcut_logo.png'}
    ],
    script: [
      // todo cehck 外部 js
      // todo check i18n
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      },
      {src: '/js/jquery-ui.min.js'},
      {src: '/js/jquery.countdown.min.js'},
      {src: '/js/slick.min.js'},
      {src: '/js/jquery.easing.js'},
      {src: '/js/jquery.scrollUp.min.js'},
      {src: '/js/jquery.zoom.min.js'},
      {src: '/js/parallax.min.js'},
      {src: '/js/jquery.fancybox.js'},
      {src: '/js/numscroller-1.0.js'},
      {src: '/js/vanilla-tilt.min.js'},
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
    {src: '@/plugins/route', ssr: true},
    {src: '@/plugins/i18n', ssr: true},
    {src: '@/plugins/Tooltip', ssr: false},
    {src: '@/plugins/CookieToVuex', ssr: true},
    {src: '@/plugins/globalComponents', ssr: true},
    {src: '@/plugins/axiosPlugin', ssr: true},
    {src: '@/plugins/vueFilter', ssr: true},
    {src: '@/plugins/vueNotification', ssr: false},
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
