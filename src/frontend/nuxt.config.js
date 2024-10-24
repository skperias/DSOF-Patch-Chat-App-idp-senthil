import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  target: 'static',

  head: {
    title: 'snyk-chat-goof',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Multiroom Chat with Nuxt, Vuex and WebSocket' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: [],

  modules: [
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: { icons: 'md' },
    treeShake: true
  },

  build: {
    extend(config, ctx) {}
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080'
  }
})
