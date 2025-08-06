// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { title: "Jack Ellis" },
  },

  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss"],

  css: ["~/assets/scss/main.scss"],

  devServer: {
    host: "0.0.0.0",
    port: 80,
  },

  vite: {
    server: {
      hmr: {
        port: 23456,
      },
    },
  },

  nitro: {
    static: true,
  },

  compatibilityDate: "2025-02-17"
});