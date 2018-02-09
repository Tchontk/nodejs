const express = require('express');

var app = express()

app.get('/', (req, res) => {
  console.log(`${req.method} -  ${req.url}`);
  res.send('<h1>Hello Express !</h1>')
})

app.listen(3000, () => {
  console.log(`Server is listen on port 3000`);
})