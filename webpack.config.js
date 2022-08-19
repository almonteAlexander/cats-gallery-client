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
				test: /\.tsx$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-react',
								{
									runtime: 'automatic',
								}
							],
						],
					},
				},
				exclude: /node_modules/
			},
			{
				test: /\.(tsx|ts)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-typescript']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.(jsx|js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-react',
								{
									runtime: 'automatic',
								}
							],
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage',
									corejs: '3.24.1'
								},
							],
						],
					},
				},
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
