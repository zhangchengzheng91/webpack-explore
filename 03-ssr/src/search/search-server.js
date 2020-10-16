const React = require('react')
const img = require('./photo.jpg')
require('./index.css')

const Search = props => {
  return (
    <div className='search'>
      this is search server
      <div>
        <img src={img}/>
      </div>
    </div>

  )
}

module.exports = <Search/>
