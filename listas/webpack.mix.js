const mix = require('laravel-mix');

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

mix.options({
   processCssUrls: false,
});

mix.sass('resources/scss/tarefa-2020-03-24-desktop-first.scss', 'public/assets/css')
	.js('resources/js/external-api.js', 'public/assets/js/external-api.js')
	.sourceMaps()
	.webpackConfig({
		devtool: 'source-map'
	});
