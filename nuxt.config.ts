import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
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
  $development: {
    devtools: {
      enabled: true,
    },
    app: {
      baseURL: "/"
    },
  },
  $production: {
    app: {
      baseURL: "/hmp/"
    }
  },
})
