const path = require('path')
const MyPlugin = require('./plugins/my-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist')
  },
  mode: 'production',
  plugins: [
    new MyPlugin({ name: 'my plugin '})
  ]
}
