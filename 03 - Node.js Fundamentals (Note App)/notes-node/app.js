// console.log('Starting app.js');

const fs = require('fs'); // https://nodejs.org/api/fs.html
// const os = require('os'); // https://nodejs.org/api/os.html
// var user = os.userInfo();
const notes = require('./notes.js');
const _ = require('lodash')
const yargs = require('yargs')

const commandDescription = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: commandDescription.title,
    body: commandDescription.body
  })
  .command('list', 'List all note')
  .command('remove', 'Remove a note', {
    title: commandDescription.title
  })
  .command('read', 'Read a note', {
    title: commandDescription.title
  })
  .help().argv;
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
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('Note found !')
    note.logNote(note)
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