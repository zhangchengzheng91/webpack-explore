const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './demo.txt',
  loaders: [
    path.resolve(__dirname, './loader/raw-loader')
  ],
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.log(err) : console.log(result)
})
