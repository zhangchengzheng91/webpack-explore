const path = require('path');


// TODO: asset managment
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle01.js',
    path: path.resolve(__dirname, 'dist')
  }
};