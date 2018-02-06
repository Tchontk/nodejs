const express = require('express')

var app = express()

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express !</h1>')
  res.send({
    name: 'P',
    Likes: ['Running', 'Biking']
  })
})
app.get('/about', (req, res) => {
  res.send('<h1>About Page !</h1>')
})

app.get('/error', (req, res) => {
  res.send({
    errorMessage: 'Error Message'
  })
})

app.listen(3000)