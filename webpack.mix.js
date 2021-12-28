require('laravel-mix-eslint');
require('laravel-mix-polyfill');
const mix = require('laravel-mix');

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
 | 'browserslist': [
 |   'cover 100%'
 | ]
 */

const appjs = './dist/js/app.js';
const appcss = './dist/css/app.css';
const versions = ['cover 99.5%', 'last 20 versions', 'not dead'];

mix
    .js('./_assets/js/app.js', appjs) // nasty horrible workaround
    .sass('./_assets/sass/style.scss', appcss)
    .polyfill({
      enabled: true,
      useBuiltIns: 'usage',
      targets: versions,
    });

if (mix.inProduction()) {
  mix
      .minify([appjs, appcss])
      .version();
} else {
  mix.eslint().sourceMaps();
}
