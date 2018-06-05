const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

console.log('start developing')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
