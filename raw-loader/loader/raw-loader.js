const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const { name } = loaderUtils.getOptions(this)

  const json = JSON.stringify(source)
    .replace('hello', 'hi')
    .replace(/\u2028/g, '\\u2028') // 为了安全起见，ES6 模版字符串问题
    .replace(/\u2029/g, '\\u2029')
    + name

  //throw new Error('loader error')
  //return `export default ${json}`
  this.callback(
    //new Error('loader error callback'),
    null,
    json,
    'other params'
  )
}
