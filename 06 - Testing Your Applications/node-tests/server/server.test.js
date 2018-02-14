const request = require('supertest')
var app = require('./server').app;

it('Should return Hello World response', (done) => {
  request(app).get('/').expect('<h1>Hello Express !</h1>').end(function(err, res) {
    if (err) throw err;
  });
});