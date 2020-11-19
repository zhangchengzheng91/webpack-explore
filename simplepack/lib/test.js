const { getAst, getDependencies, transform } = require('./parser')
const path = require('path')


const ast = getAst(path.join(__dirname, '../src/index.js'))

console.log('ast=', ast)

const dependencies =  getDependencies(ast)

console.log('dependencies=', dependencies)

const code = transform(ast)

console.log('code=', code)
