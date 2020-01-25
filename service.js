const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const fs = require('fs')
const prerender = require('prerender-node')

// Load environment variables from .env file
dotenv.config()

const PORT = process.env.PORT || 3210

const app = express()

app.use(prerender)
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Serve static assets
app.use(express.static(path.resolve(__dirname, '.', 'build')))

app.get('/share', function (request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html')

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    // replace the special strings with server generated strings
    data = data.replace(/\__OG_URL__/g, 'http://www.digitalvillage.me:3210/')
    data = data.replace(/\__OG_TITLE__/g, 'How does the Facebook Crawler work?')
    data = data.replace(/\__OG_DESCRIPTION__/g, 'You can use the Sharing Debugger to see the information that is used')
    data = data.replace(/\__OG_IMAGE__/g, 'https://images.pexels.com/photos/3494913/pexels-photo-3494913.jpeg?cs=srgb&dl=pexels-3494913.jpg&fm=jpg')
    data = data.replace(/\__TWITTER_TITLE__/g, 'How does the Facebook Crawler work?')
    data = data.replace(/\__TWITTER_DESCRIPTION__/g, 'You can use the Sharing Debugger to see the information that is used')
    result = data.replace(/\__TWITTER_IMAGE__/g, 'https://images.pexels.com/photos/3341605/pexels-photo-3341605.jpeg?cs=srgb&dl=pexels-3341605.jpg&fm=jpg')
    
    console.log('----------- share page ----------- ')
    console.log(result)
    console.log('----------- share page ----------- ')
  
    response.send(result)
  })
})

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'))
})

app.listen(PORT, function () {
  console.log(`Express server listening on port  ${PORT}`)
})

module.exports = app