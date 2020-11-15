const { SyncHook, AsyncSeriesHook } = require('tapable')

module.exports = class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newspeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncSeriesHook(["source", "target", "routesList"])
    }
  }

  run() {
    this.accelerate(10)
    this.brake()
    this.calculateRoutes('Async', 'hook', 'demo')
  }

  accelerate(newspeed) {
    this.hooks.accelerate.call(newspeed)
  }

  brake() {
    this.hooks.brake.call()
  }

  calculateRoutes() {
    this.hooks.calculateRoutes.promise(...arguments).then(res => {

    }, err => {

    })
  }
}
