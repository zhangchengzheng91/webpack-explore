const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
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
  mode: 'production',
  entry,
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            }
          },
          'less-loader',
          'postcss-loader',
          //{
          //  loader: 'postcss-loader',
          //  options: {
          //    plugins: [
          //      require('autoprefixer')({
          //        browsers: ['last 2 version', '> 1%', 'IOS 7']
          //      })
          //    ]
          //  }
          //}
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:8].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNamePluginExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    ...htmlWebpackPlugins,
  ]
}
