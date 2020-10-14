if (process.env.NODE_ENV === 'production') {
  exports = require('./dist/large-number.min.js')
} else {
  exports = require('./dist/large-number.js')
}
