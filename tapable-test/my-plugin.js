const Compiler = require('./compiler')

class MyPlugin {
  apply(compiler) {
    compiler.hooks.brake.tap('WarningLampPlugin', () => {
      console.log('WarningLampPlugin')
    })
    compiler.hooks.accelerate.tap('LoggerPlugin', newspeed => {
      console.log(`Accelerate to ${newspeed}`)
    })
    compiler.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routeslist, callback) => {
      console.log('source', source)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`tapPromise to ${source} ${target} ${routeslist}`)
          resolve('resolve')
        }, 1000 * 2)
      })
    })
  }
}

const myPlugin = new MyPlugin()

const options = {
  plugins: [myPlugin]
}

const compiler = new Compiler()

for (let plugin of options.plugins) {
  if (typeof plugin === 'function') {
    plugin.call(compiler, compiler)
  } else {
    plugin.apply(compiler)
  }
}

compiler.run()
