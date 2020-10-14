const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber',
    libraryExport: 'defalut',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 会同时压缩 ES6 的语法，uglify 遇到 ES6 的语法会报错
        include: /\.min\.js$/
      })
    ]
  }
}
