//export default function add(a, b) {
function add(a, b) {
  let i = a.length - 1
  let j = b.length - 1

  let carry = 0
  let ret = ''

  while(i >= 0 || j >= 0) {
    let x = 0
    let y = 0
    let sum = 0
    if (i >= 0) {
      x = a[i] - '0'
      i--
    }
    if (j >= 0) {
      y = b[j] - '0'
      j--
    }
    sum = x + y + carry
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    } else {
      carry = 0
    }
    ret = sum + ret
  }

  if (carry) {
    ret = carry + ret
  }

  return ret
}

console.log(add('999', '1'))
console.log(add('1', '999'))
console.log(add('1', '999999999999999999999999999999999999999999999999999999999999'))
