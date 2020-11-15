const { SyncHook, AsyncSeriesHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList"])
    }
  }
}

const car = new Car()

car.hooks.brake.tap('WarningLampPlugin', () => {
  console.log('WarningLampPlugin')
})

car.hooks.accelerate.tap('LoggerPlugin', newspeed => {
  console.log(`Accelerate to ${newspeed}`)
})

car.hooks.calculateRoutes.tapPromise('calculateRoutes tapPromise', (source, target, routeslist, callback) => {
  console.log('source', source)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`tapPromise to ${source} ${target} ${routeslist}`)
      resolve('resolve')
    }, 1000 * 2)
  })
})

car.hooks.brake.call()
car.hooks.accelerate.call(10)

console.time('cost')

car.hooks.calculateRoutes.promise('Async', 'hook', 'demo').then(res => {
  console.log('res=', res)
  console.timeEnd('cost')
}, err => {
  console.error(err)
  console.timeEnd('cost')
})

