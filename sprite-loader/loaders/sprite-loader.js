const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')

module.exports = function(source) {
  const callback = this.async()

  const imgs = source.match(/url\((\S*)\?__sprite/g)

  const matchedImg = []

  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i].match(/url\(\"(\S*)\?__sprite/)[1]
    matchedImg.push(path.join(__dirname, img))
  }

  Spritesmith.run({ src: matchedImg }, (err, result) => {
    if (err) {
      console.log('err=', err)
      return
    }
    const { coordinates, image } = result
    fs.writeFileSync(path.join(process.cwd(), 'sprite-loader.png'), image)

    source = source.replace(/url\((\S*)\?__sprite\"\)/g, match => {
      const key = path.join(process.cwd(), 'loaders', match).replace(/url\(\"/, '').replace(/\?__sprite\"\)/, '')
      const coordinate = coordinates[key]
      return `url('sprite-loader.png') no-repeat ${coordinate.x}px ${coordinate.y}px`
    })
    callback(null, source)
  })
}
