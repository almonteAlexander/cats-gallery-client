const path = require('path');

module.exports = {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(tsx|jsx|js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-react',
								{
									runtime: 'automatic', // 'classic'
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
		],
	},
	resolve: {
		extensions: ['.tsx', '.jsx', '.ts', '.js'],
	},
};
