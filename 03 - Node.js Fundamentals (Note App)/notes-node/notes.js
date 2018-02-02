// console.log('Starting notes.js');
// console.log(module.exports);

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// module.exports.age = 25;

// module.exports.add = (a, b) => {
//   return a + b;
// };

const fs = require('fs'); // https://nodejs.org/api/fs.html
const _ = require('lodash')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (err) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  })
  debugger;
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  return fetchNotes();
}

var removeNote = (title) => {
  var notes = fetchNotes();
  // var filteredNotes = notes.filter((note) => note.title !== title)
  var removedNotes = _.remove(notes, note => note.title === title)
  saveNotes(notes)
  return (removedNotes.length === 0 ? false : true)
}

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]
}

var logNote = (note) => {
  console.log('--');
  console.log('Title: ' + note.title);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};