const fs = require('fs')
const path = require('path')

const { runLoaders } = require('loader-runner')

runLoaders({
  resource: './loaders/index.css',
  loaders: [
    path.join(__dirname, './loaders/sprite-loader')
  ],
  readSource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.log('err=', err) : console.log('result=', result)
  // 这里合理的方式是使用 this.emitFile()
  fs.writeFileSync(path.join(process.cwd(), 'dist/bundle-index.css'), result.result)

})
