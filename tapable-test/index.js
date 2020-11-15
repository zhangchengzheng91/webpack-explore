const { SyncHook } = require('tapable')

const hook1 = new SyncHook(['arg1', 'arg2', 'arg3'])

hook1.tap('hook1', (arg1, arg2, arg3) => {
  const result = arg1 + arg2 + arg3
  console.log('result=', result)
  return result
})

hook1.call(1, 2, 3)
