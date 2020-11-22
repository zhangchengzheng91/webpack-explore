const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')

module.exports = function(source) {
  const { name } = loaderUtils.getOptions(this)
  const callback = this.async()

  // 关闭缓存
  this.cacheable(false)

  fs.readFile(
    path.join(__dirname, '../async.txt'),
    'utf-8',
    (err, data) => {
      callback(err, {
        data,
        name
      })
    }
  )
}
