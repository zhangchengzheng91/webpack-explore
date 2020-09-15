import hello from './hello'
import { common } from '../../common'

const str = `
  ${hello('index 2020-08-16')}\n
  this is common\n
  ${common()}
`

document.write(str)
