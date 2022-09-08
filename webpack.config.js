const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'static/js/bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: pathData => {
      const fileFolder = path.dirname(pathData.filename).split('/').slice(3).join('/');
      return `static/${fileFolder}/[name].[contenthash][ext]`;
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    port: 3000,
    open: true,
    compress: true,
  },
  devtool: 'source-map'
};