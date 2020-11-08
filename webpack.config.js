const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
  
module.exports = {

  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

entry: {
  app: './src/index.js',
  print:'./src/print.js'
},
devtool: 'inline-source-map',
plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
      title: 'Output Management'
  })
],
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
}


};