const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')

const sprites = [
  './loaders/images/fork.png',
  './loaders/images/github.png',
  './loaders/images/twitter.png',
]

Spritesmith.run({ src: sprites}, function handleResult(err, result) {
  console.log('result=', result)
  fs.writeFileSync(path.join(__dirname, './dist/sprite_test.png'), result.image)
})
