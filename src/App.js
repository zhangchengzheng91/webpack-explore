import React, { Component } from 'react'
import { file, helpers } from './globals.js'

import './App.css'

class App extends Component {
  buttonClick() {
    const ele1 = document.getElementById('hello')
    const ele = $('#hello')
    console.log('ele=', ele)
    console.log('ele1=', ele1)
  }

  render() {
    const array = ['hello', 'world', 'haha']
    console.log('file=', file)
    console.log('helpers=', helpers)
    return (
      <div>
        <h1>My React App!!!</h1>
        <h2>{join(array, ' ')}</h2>
        <button onClick={() => this.buttonClick()} id='hello'>hello</button>
      </div>
    )
  }
}

export default App
