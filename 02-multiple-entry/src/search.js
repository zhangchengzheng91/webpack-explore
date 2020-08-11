//import hello from './hello'
//
//document.write(hello('search'))

import React from 'react'
import ReactDom from 'react-dom'
import './search.css'
import './search.less'
import exampleImage from '../assets/image/example-image.png'

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className='search'>Search Text watch</div>
        <div>
          <img src={exampleImage} alt='exampleImage'/>
        </div>
        <div style={{
          backgroundImage: 'url("../assets/image/example-image.png")'
        }}>
          this is inline style
        </div>
      </div>

    )
  }
}

ReactDom.render(<Search/>, document.getElementById('root'))
