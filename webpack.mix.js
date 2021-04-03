const mix = require("laravel-mix");

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

const es2015 = "dist/js/app.es2015.js";

mix
.js("_assets/js/*.js", es2015)      // nasty horrible workaround
.babel(es2015, "dist/js/app.js")
.sass("_assets/sass/style.scss", "dist/css/app.css");
