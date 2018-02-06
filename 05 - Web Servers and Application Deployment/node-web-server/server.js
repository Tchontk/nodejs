const express = require('express');
const hbs = require('hbs');

var app = express()

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express !</h1>')
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Hello ScReAm It',
    name: 'P',
    hobbies: ['Running', 'Biking']
  })
  // res.send({
  //   name: 'P',
  //   Likes: ['Running', 'Biking']
  // })
})
app.get('/about', (req, res) => {
  // res.send('<h1>About Page !</h1>')
  res.render('about.hbs', {
    pageTitle: 'About Page !',
  })
})

app.get('/error', (req, res) => {
  res.send({
    errorMessage: 'Error Message'
  })
})

app.listen(3000, () => {
  console.log('Server is listen on port 3000');
})