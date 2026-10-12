
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	...defaultConfig,
	entry: {
		'testimonial-grid/index': './src/testimonial-grid/index.js',
		'testimonial-item/index': './src/testimonial-item/index.js',
	},
	plugins: [
		...(defaultConfig.plugins || []),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/testimonial-item/render.php',
					to: 'testimonial-item/render.php',
				},
			],
		}),
	],
};
