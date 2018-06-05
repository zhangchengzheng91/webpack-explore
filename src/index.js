//import _ from 'lodash'
import './style.css'
import './testSass.scss'
import './testLess.less'
//import photo from './asset/photo.jpg'
import printMe from './print'

function component() {
  var element = document.createElement('div')
  const btn = document.createElement('button')

  btn.innerHTML = 'Click me and check the console!!'
  btn.onclick = printMe
  btn.classList.add('test-sass')
  element.appendChild(btn)

  // Lodash, now imported by this script
  //element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ')
  //element.classList.add('hello')
  //element.classList.add('test-sass')
  //element.classList.add('test-less')
  //const img = new Image()
  //img.src = photo
  //element.appendChild(img)
  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
