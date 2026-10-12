const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'testimonial-grid/index': './src/testimonial-grid/index.js',
		'testimonial-item/index': './src/testimonial-item/index.js',
	},
};