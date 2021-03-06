const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024 * 100 // 如果图片体积小于 100 KB，自动将图片转换为 base64
          }
        }],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      }
    ]
  },
}
