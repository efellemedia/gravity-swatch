let mix = require('laravel-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath(__dirname + "/dist")

mix.js('src/js/gravity.js', 'js')
    .sass('src/scss/gravity.scss', 'css')
    .copy(__dirname + '/dist/css', __dirname + '/docs/assets/css')
    .copy(__dirname + '/dist/img', __dirname + '/docs/assets/img')
    .copy(__dirname + '/dist/js', __dirname + '/docs/assets/js');
