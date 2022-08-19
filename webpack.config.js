const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(tsx|ts|jsx|js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/public/index.html' })
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
};
