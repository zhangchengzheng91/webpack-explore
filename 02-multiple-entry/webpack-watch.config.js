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
  mode: 'development',
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
  watch: true, // 默认 false，也就是不开启
  watchOptions: { // 只有开启监听模式时，watchOptions 才有意义
    ignored: /node_modules/, // 默认为空，不监听的文件或者文件夹，支持正则匹配
    aggregateTimeout: 300, // 监听到变化后会等 300ms 再去执行，默认 300ms
    poll: 1000, // 判断文件是否发生变化时通过不停询问系统指定文件有没有变化实现的，1000ms 询问一次
  },
}
