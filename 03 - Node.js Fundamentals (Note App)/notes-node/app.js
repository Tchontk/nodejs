console.log('Starting app.');

const fs = require('fs'); // https://nodejs.org/api/fs.html
const os = require('os'); // https://nodejs.org/api/os.html
var user = os.userInfo();



fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err, data) => {
  if (err) {
    console.error('There was an error', err);
  } else {
    console.log('The data was appended to file!', data);
  }
});