const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Sorns Community ของการสอน',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#cdf4d7' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//       { rel: 'stylesheet', type: 'image/x-icon', href: '/favicon.ico' }
// <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

    ],
    script: [
      {
        src: 'https://use.fontawesome.com/a276f3cb54.js'
      }
  ]



  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
      color: '#19b585',
      height: '3px'
 },


 manifest: {
   name: 'Sorns',
   display: 'browser',

 },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

    {
      src: '~/plugins/localStorage.js',
      ssr: false,
    
    },

        {
          src: '~/plugins/hotjar',
          ssr: false
        }

  
  

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    '@nuxtjs/pwa'


  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {

  
     
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

// transition: {
//  name: 'fade',
//  mode: 'out-in'

// }

}
