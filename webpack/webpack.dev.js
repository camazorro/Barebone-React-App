/**
 * Webpack Development Setup
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: ' React APP Development',
      template: 'src/index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()    
  ]
});
