export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mikkelraev.dk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Noto+Sans+JP&display=swap' },


    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/master'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/components'

  ],

  render: {
    static: {
      setHeaders(res) {
        res.setHeader('X-Frame-Options', 'ALLOWALL')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
   }
 }
},

proxy: {
  'cdn/stories/home': { target: "https://app.storyblok.com/", pathRewrite: {'^/api/': ''} }
},

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules


  buildModules: [
  ],



  // googleFonts: {
  //   display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  //   preload: true,

  //   families: {
  //     Roboto: true,
  //     'Josefin+Sans': true,
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: 'gufq80PXkbKQaQd36BZA5gtt',
        cacheProvider: 'memory'
      }
    ],

    // '@nuxtjs/google-fonts',


  ],

//   googleFonts: {
//     families: {
//         Roboto: true,
//         'Josefin+Sans': true,
//         Lato: [100, 300],
//         Raleway: {
//           wght: [100, 400],
//           ital: [100]
//         },
//       },
//     display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
//     prefetch: true,
//     preload: true
//   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'da'
    },
    icon: {
      source: '~/static/mikkelraev-logo-small.png',
      fileName: 'mikkelraev-logo-small.png' 
     },
     meta: {
      theme_color: '#2BF4A1'
        }

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
