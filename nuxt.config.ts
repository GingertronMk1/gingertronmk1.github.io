// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    ['@nuxt/eslint', { fix: true }],
  ],

  devtools: { enabled: true },
  app: {
    head: { title: 'Jack Ellis' },
  },

  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/main.css',
  ],

  devServer: {
    host: '0.0.0.0',
    port: 80,
  },

  compatibilityDate: '2025-02-17',

  nitro: {
    static: true,
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      hmr: {
        port: 23456,
      },
    },
  },

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
