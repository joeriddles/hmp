import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/content',
  ],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {}
  },
  content: {
    highlight: {
      theme: {
        default: "light-plus",
        dark: "dark-plus",
      },
    },
  },
})
