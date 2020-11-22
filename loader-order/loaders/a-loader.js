const { getOptions, interpolateName } = require('loader-utils')

module.exports = function(source) {
  console.log('loader a is executed')
  const url = interpolateName(this, '[name].[ext]', source)

  console.log('url=', url)
  this.emitFile(url, 'loader emit file test')
  return source
}
