const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const fs = require('fs')

// Load environment variables from .env file
dotenv.config()

const PORT = process.env.PORT || 3210

const app = express()

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

app.get('/', function (request, response) {
  console.log('Home page visited!')
  const filePath = path.resolve(__dirname, './build', 'index.html')

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    let result;
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_URL/g, 'https://eze-liff.herokuapp.com/')
    data = data.replace(/\$OG_TITLE/g, 'How does the Facebook Crawler work?')
    data = data.replace(/\$OG_DESCRIPTION/g, 'You can use the Sharing Debugger to see the information that is used')
    data = data.replace(/\$OG_IMAGE/g, 'https://images.pexels.com/photos/3494913/pexels-photo-3494913.jpeg?cs=srgb&dl=pexels-3494913.jpg&fm=jpg')
    data = data.replace(/\$TWITTER_TITLE/g, 'How does the Facebook Crawler work?')
    data = data.replace(/\$TWITTER_DESCRIPTION/g, 'You can use the Sharing Debugger to see the information that is used')
    result = data.replace(/\$TWITTER_IMAGE/g, 'https://images.pexels.com/photos/3341605/pexels-photo-3341605.jpeg?cs=srgb&dl=pexels-3341605.jpg&fm=jpg')

    response.send(result)
  })
})

// Serve static assets
app.use(express.static(path.resolve(__dirname, '.', 'build')))

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'))
})

app.listen(PORT, function () {
  console.log(`Express server listening on port  ${PORT}`)
})

module.exports = app