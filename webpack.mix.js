const mix = require("laravel-mix");
const eslint = require("laravel-mix-eslint");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 | For the browser list check `package.json`
 | Currently it's
 | "browserslist": [
 |   "cover 100%"
 | ]
 */

const appjs = "./dist/js/app.js";
const appcss = "./dist/css/app.css";

mix
  .setPublicPath("./dist")
  .js("./_assets/js/app.js", appjs) // nasty horrible workaround
  .sass("./_assets/sass/style.scss", appcss);

if(mix.inProduction()) {
    mix.minify([
      appjs,
      appcss
    ]);
} else {
  mix
    .eslint()
    .sourceMaps();
}