const JSZip = require('jszip')
const path = require('path')
const { RawSource } = require('webpack-sources')

const zip = new JSZip()

module.exports = class ZipPlugin  {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
      const folder = zip.folder(this.options.filename)

      for (let filename in compilation.assets) {
        // 获取文件内容
        const source = compilation.assets[filename].source()
        // 将获取的文件内容放到 folder 中
        folder.file(filename, source)
      }

      // 生成文件
      zip.generateAsync({
        type: 'nodebuffer'
      }).then(content => { // 由 type 决定 content 的具体内容
        // 将内容挂载到 compilatioon.assets 上去
        const outputPath = path.join(compilation.options.output.path, this.options.filename)

        // 将绝对路径转换为相对路径
        const outputRelativePath = path.relative(
          compilation.options.output.path,
          outputPath
        )
        // 转化 buffer
        compilation.assets[outputRelativePath] = new RawSource(content)

        callback()
      })
    })
  }
}
