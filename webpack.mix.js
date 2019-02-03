const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const isDevelop = /develop/.test(process.env.NODE_ENV);

const rules = isDevelop ? [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: 'eslint-loader',
  },
] : [];

mix.webpackConfig({
  module: {
    rules,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'resources/js'), 'node_modules'],
  },
});

mix.react('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .sourceMaps();
