require("dotenv").config();

export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "gingertronmk1.github.io",
    titleTemplate: "%s - Jack Ellis",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "ag-grid-community/dist/styles/ag-grid.min.css",
    "ag-grid-community/dist/styles/ag-theme-alpine-dark.min.css",
    "ag-grid-community/dist/styles/ag-theme-alpine.min.css",
    "ag-grid-community/dist/styles/ag-theme-balham-dark.min.css",
    "ag-grid-community/dist/styles/ag-theme-balham.min.css",
    "ag-grid-community/dist/styles/ag-theme-blue.min.css",
    "ag-grid-community/dist/styles/ag-theme-bootstrap.min.css",
    "ag-grid-community/dist/styles/ag-theme-dark.min.css",
    "ag-grid-community/dist/styles/ag-theme-fresh.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
    "@nuxtjs/stylelint-module",
    "@nuxt/postcss8",
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  router: {
    base: "/",
  },

  generate: {
    fallback: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: "autoplace",
        },
      },
    },
  },

  styleResources: {
    scss: ["@/assets/scss/resources/resources.scss"],
  },

  stylelint: {
    files: "*.scss",
  },

  publicRuntimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    redditUsername: process.env.REDDIT_USERNAME,
    redditPassword: process.env.REDDIT_PASSWORD,
    redditClientId: process.env.REDDIT_CLIENT_ID,
    redditClientSecret: process.env.REDDIT_CLIENT_SECRET,
    dev: process.env.NODE_ENV !== "production",
  },
};
