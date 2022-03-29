const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: process.env.NODE_ENV === "development",
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/resources/resources.scss";',
      },
    },
  },
});
