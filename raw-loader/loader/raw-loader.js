module.exports = function(source) {
  const json = JSON.stringify(source)
    .replace('hello', 'hi')
    .replace(/\u2028/g, '\\u2028') // 为了安全起见，ES6 模版字符串问题
    .replace(/\u2029/g, '\\u2029')
  return `export default ${json}`
}
