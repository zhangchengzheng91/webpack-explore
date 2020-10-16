const express = require('express')
const { renderToStaticMarkup } = require('react-dom/server')
const SSR = require('../dist/search-server.js')
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')
const data = require('./data.json')

if (typeof window === 'undefined') {
  global.window = {}
}

const renderMakeup = str => {
  return template
    .replace('<!--HTML_PLACEHOLDER-->', str)
    .replace('<!--INITIAL_DATA_PALCEHOLDER-->', `
      <script>
          window.data = ${JSON.stringify(data)}
      </script>
    `)
}


const server = port => {
  const app = express()

  app.use(express.static('dist'))

  app.get('/search', (req, res) => {
    const html = renderToStaticMarkup(SSR)
    console.log('html=', html)
    res.status(200).send(renderMakeup(html))
  })

  app.listen(port, () => {
    console.log('server is running on port ', port)
  })
}

server(process.env.PORT || 3002)
