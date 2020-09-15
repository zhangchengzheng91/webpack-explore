const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const glob = require('glob')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []

  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  //console.log('entryFiles=', entryFiles)

  entryFiles.forEach(entryFile => {
    //console.log('entryFile=', entryFile)
    const match = entryFile.match(/src\/(.*)\/index\.js$/)
    const pageName = match && match[1]
    //console.log('pageName=', pageName)
    entry[pageName] = entryFile
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`), // 模版路径。模板当中可以使用 ejs 的语法
        filename: `${pageName}.html`, // 打包之后的文件名称
        chunks: [pageName], // 要使用的 chunk
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
    )
  })
  return {
    entry,
    htmlWebpackPlugins,
  }
}

const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
  },
  mode: 'none',
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
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ...htmlWebpackPlugins,
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
  devtool: 'cheap-ource-map',
  //devtool: 'source-map',
}
