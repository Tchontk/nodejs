console.log('Starting app.js');

const fs = require('fs'); // https://nodejs.org/api/fs.html
// const os = require('os'); // https://nodejs.org/api/os.html
// var user = os.userInfo();
const notes = require('./notes.js');
const _ = require('lodash')

// node app.js read --title="secrets 2"
// node app.js read --title "secrets 2"
console.log(process.argv);
var command = process.argv[2];
console.log('Command : ', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}

// var res = notes.addNote()
// var add = notes.add

// var filteredArray = _.uniq(['A', 'B', 4, 'A', 5, 'C', 4])
// console.log(notes.age);
// console.log(res);
// console.log(filteredArray);

// console.log('Result:', add(9, -2));

// console.log(_.camelCase('EezjrlAE$Akmezkr-zzer'))

// fs.appendFile('greetings.txt', `Hello ${user.username}, Age : ${notes.age}`, (err, data) => {
//   if (err) {
//     console.error('There was an error', err);
//   } else {
//     console.log('The data was appended to file!', data);
//   }
// });