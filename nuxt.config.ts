import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'vuetify-nuxt-module',
  ],
  content: {
    highlight: {
      theme: {
        default: "light-plus",
        dark: "dark-plus",
      },
    },
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {}
  },
  googleFonts: {
    families: {
      "Cormorant+Garamond": true
    }
  },
  $development: {
    devtools: {
      enabled: false,
    },
  },
})
