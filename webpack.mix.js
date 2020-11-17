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

mix.js(         // Horrible workaround
    "_assets/js/*.js",
    "assets/js/app.es2015.js"
).babel(
    "assets/js/app.es2015.js",
    "assets/js/app.js"
);

mix.sass("_assets/sass/style.scss", "assets/css/style.css");
