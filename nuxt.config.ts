// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { title: "Jack Ellis" },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
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
  typescript: {
    typeCheck: true,
  },
  ssr: false
});
