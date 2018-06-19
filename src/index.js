//import _ from 'lodash'
//import './style.css'
//import './testSass.scss'
//import './testLess.less'
////import photo from './asset/photo.jpg'
//import printMe from './print'
//import { cube } from './math'
//
//console.log(
//  _.join([ 'index', 'module', 'loaded!' ], ' ')
//)
//
//if (process.env.NODE_ENV !== 'production') {
//  console.log('Looks like we are in development mode!')
//}
//
//
//function component() {
//  //var element = document.createElement('div')
//  var element = document.createElement('pre')
//  const btn = document.createElement('button')
//
//
//  //btn.innerHTML = 'Click me and check the console!!'
//  btn.onclick = printMe
//  btn.classList.add('test-sass')
//  element.appendChild(btn)
//
//  // Lodash, now imported by this script
//  //element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ')
//  //element.classList.add('hello')
//  //element.classList.add('test-sass')
//  //element.classList.add('test-less')
//  //const img = new Image()
//  //img.src = photo
//  //element.appendChild(img)
//  element.innerHTML = [
//    'Hello webpack!',
//    '5 cubed is equal to ' + cube(5)
//  ].join('\n\n')
//
//  return element
//}
//
//document.body.appendChild(component())
//
//if (module.hot) {
//  module.hot.accept('./print.js', function() {
//    console.log('Accepting the updated printMe module!')
//    printMe()
//  })
//}
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


console.log('this=', this)
//this.alert('hello world')

ReactDOM.render(<App />, document.getElementById('root'))
