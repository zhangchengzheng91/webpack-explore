const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './async.txt',
  loaders: [
    {
      loader: path.resolve(__dirname, './loader/async-raw-loader.js'),
      options: {
        name: 'async test'
      }
    }
  ],
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.log(err) : console.log(result)
})
