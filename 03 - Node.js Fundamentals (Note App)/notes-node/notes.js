console.log('Starting notes.js');
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

var fetchNotes = (fileName) => {
  try {
    var notesString = fs.readFileSync(fileName)
    return JSON.parse(notesString)
  } catch (err) {
    return []
  }
}

var saveNotes = (notes, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(notes))
}

var addNote = (title, body) => {
  var fileName = 'notes-data.json'
  var notes = fetchNotes(fileName);
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  })
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes, fileName)
    return note
  }
}

var getAll = () => {
  console.log('Getting all notes');
}

var removeNote = (title) => {
  var fileName = 'notes-data.json'
  var notes = fetchNotes(fileName);

  // var filteredNotes = notes.filter((note) => note.title !== title)
  var removedNotes = _.remove(notes, note => note.title === title)
  saveNotes(notes, fileName)
  return (removedNotes.length === 0 ? false : true)
}

var getNote = (title) => {
  console.log('Read : ', title);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};