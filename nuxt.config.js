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
    title: 'HaveFun Men\'s Underwear | 男性內褲',
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
      {
        name: "keywords",
        content: "HaveFun Men's Underwear,男性內褲,男內褲,三角內褲,四角內褲,比基尼三角,提臀內褲,四角褲,三角褲,男性內著,貼身衣物"
      },
      {
        name: "description",
        content: "HaveFun Men's Underwear 致力於提供時尚、舒適、性感的男性內著。"
      },
      {
        name: "copyright",
        content: "HaveFun Men's Underwear"
      },
      {
        name: "author",
        content: "康闓科技股份有限公司"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "havefununderwear.com"
      },
      {
        property: "og:title",
        content: "HaveFun Men's Underwear | 男性內褲"
      },
      {
        property: "og:description",
        content: "HaveFun Men's Underwear 致力於提供時尚、舒適、性感的男性內著。"
      },
      {
        property: "og:img",
        content: "https://li1871-48.members.linode.com/media/3408413256-康闓_HFMU_OTIMG_chloe_2020805.jpg"
      },
      {
        property: "og:site_name",
        content: "HaveFun Men's Underwear"
      },
      {
        name: "google",
        content: "translate"
      },
      {
        name: "robots",
        content: "index,follow"
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
      {src: '/js/checkBrowser.js'},
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
    'nuxt-facebook-pixel-module',
  ],
  facebook: {
    track: 'PageView',
    // 替換自己 FB Pixel 的 ID
    pixelId: '273875380566944',
    disabled: false
  },
  // 開始加入GA code
  'google-gtag':{
    id: 'UA-173367132-1', // 必填，請填寫剛申請到的追蹤碼ID
    config:{
      // 這裡是填寫對gtag的需求選項」
      anonymize_ip: true,
      send_page_view: false, // 避免頁面刷新時後的重複追蹤
      linker:{ // 跨域追蹤，追蹤兩個相關但不同網域的頁面
        domains:['domain.com','domain.org']
      }
    },
    debug: true, // 允許在開發中進行追蹤
    disableAutoPageTrack: false // 關閉追蹤每個頁面路由
  },
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
