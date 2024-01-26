import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
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
  image: {
    quality: 80,
    format: ['jpg'],
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
