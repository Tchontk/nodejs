console.log('Starting app.');

const fs = require('fs'); // https://nodejs.org/api/fs.html
const os = require('os'); // https://nodejs.org/api/os.html
var user = os.userInfo();
const notes = require('./notes.js');

var res = notes.addNote()
var add = notes.add

console.log(notes.age);
console.log(res);

console.log('Result:', add(9, -2));


fs.appendFile('greetings.txt', `Hello ${user.username}, Age : ${notes.age}`, (err, data) => {
  if (err) {
    console.error('There was an error', err);
  } else {
    console.log('The data was appended to file!', data);
  }
});