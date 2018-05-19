import _ from 'lodash'

function component() {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join([ 'Hello', 'webpack', 'lueluelue', 123, 456 ], ' ')
  console.log('test pre-commit')
  abc = 3
  var1 = 3
  var2 = 4
  alert(3333333)
  alert(4444444)
  return element
}

document.body.appendChild(component())
