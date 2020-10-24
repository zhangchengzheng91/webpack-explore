const path = require('path')
const webpack = require('webpack')
const rimfaf = require('rimraf')
const mocha = require('mocha')

process.chdir(path.join(__dirname, 'template'))

rimfaf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod')

  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }))

    console.log('webpack build success, begin run test.')
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    mocha.run()
  })
})
