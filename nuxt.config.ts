// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
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
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  css: ["~/assets/style.scss"],
});
