// 1. 将 ES6 的代码转换为 ES5 的代码
//    将源码解析成 AST 语法树
//    将 AST 语法树转换成 ES5 代码
// 2. 分析依赖
const babylon = require('babylon')
const fs = require('fs')
const traverse = require('babel-traverse').default
const { transformFromAst } = require('babel-core')

module.exports = {
  getAst: path => {
    const source = fs.readFileSync(path, 'utf-8')

    return babylon.parse(source, {
      sourceType: 'module'
    })
  },
  getDependencies: (ast) => {
    const dependencies = []
    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value)
      }
    })
    return dependencies
  },
  transform: (ast) => {
    const { code } = transformFromAst(ast, null, {
      presets: ['env']
    })

    return code
  }
}
