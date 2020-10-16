const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // 默认开启 tree shaking
  entry: {
    search: './src/search/search-server.js'
  },
  output: {
    filename: '[name]-server.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd',
    globalObject: 'this', // 将构建好的功能挂载在 this 下，而非直接挂载 window 下
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }],
      }, {
        test: /\.css$/,
        use: [
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/search/index.html`), // 模版路径。模板当中可以使用 ejs 的语法
      //filename: `${pageName}.html`, // 打包之后的文件名称
      //chunks: ['vendors', pageName], // 要使用的 chunk。chunk 顺序不影响加载顺序
      //chunks: [pageName], // 要使用的 chunk。chunk 顺序不影响加载顺序
      //chunks: ['commons', pageName], // 要使用的 chunk。chunk 顺序不影响加载顺序
      inject: true, // 将 js、css 注入 html
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true, // 压缩 html 中的内联样式，包括 head 中的 style
        minifyJS: true,  // 压缩 html 中的 js
        removeComments: false
      }
    }),
  ]
}
