export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mikkelraev.dk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'mikkelraev.dk er en personlig portefølje drevet af Mikkel Hornbech Nielsen' },
      { hid: 'keywords', name: 'keywords', content: 'portefølje, portfolio, resume, CV, curicum vitale, Mikkel, Hornbech, Nielsen, mikkelraev, mikkel, raev, ræv, hjemmeside, frontend, grafik, web, udvikling, UI, UX, kode' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'preconnect',  href: 'https://fonts.gstatic.com' }
      // { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Noto+Sans+JP&display=swap' },


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
    '@nuxt/image',
    '@nuxtjs/google-fonts',

  ],

  googleFonts: {
    families: {
        'Noto+Sans+JP': true,
        Poppins: [200],
 
      },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preload: true
  },

image: {
  // Options
      // The screen sizes predefined by `@nuxt/image`:
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536
      },
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/mikkelraev/image/upload'
      }
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'da',
      name: "mikkelraev.dk",
      short_name: "mikkelraev.dk",
      background_color: "#800080",
      theme_color: '#2BF4A1',

    },
    icon: {
      source: '~/static/maskable_icon.png',
      fileName: 'maskable_icon.png' 
     },
     meta: {
      theme_color: '#2BF4A1'

        },
        purpose: 'any',
        background_color: "#4a0c85",
        name: "mikkelraev.dk",
        author: "Mikkel Hornbech Nielsen",
        lang: "da",

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
