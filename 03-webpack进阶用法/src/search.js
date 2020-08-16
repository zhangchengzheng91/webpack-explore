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
        <div>
          this is inline style test
        </div>
        <div className="flex-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    )
  }
}

ReactDom.render(<Search/>, document.getElementById('root'))
