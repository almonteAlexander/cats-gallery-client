const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: pathData => {
			const fileFolder = path.dirname(pathData.filename).split('/').slice(3).join('/');
			return `static/${fileFolder}/[name][ext]`;
		},
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(tsx|ts|jsx|js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
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
