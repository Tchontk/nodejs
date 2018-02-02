console.log('Starting app.js');

const fs = require('fs'); // https://nodejs.org/api/fs.html
// const os = require('os'); // https://nodejs.org/api/os.html
// var user = os.userInfo();
const notes = require('./notes.js');
const _ = require('lodash')
const yargs = require('yargs')

const argv = yargs.argv;
// node app.js read --title="secrets 2"
// node app.js read --title "secrets 2"
// console.log('Process :', process.argv);
// console.log('yargs :', argv);
var command = process.argv[2];
// console.log('Command : ', command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  debugger;
  if (note) {
    console.log('Note created !')
    notes.logNote(note)
  } else {
    console.log('Note title token')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('Note found !')
    notes.logNote(note)
  } else {
    console.log('Note not found')
  }
} else if (command === 'remove') {
  let noteRemove = notes.removeNote(argv.title)
  var message = noteRemove ? 'Note was remove' : 'Note not found'
  console.log(message);
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