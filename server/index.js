const express = require('express')
const path = require('path')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '377f14c9e9d8471bac00244f0a049462',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})




const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})