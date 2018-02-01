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

var getNotes = () => {
  var notes = []
  try {
    var notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
  } catch (err) {
    //console.log(err);
  }
  return notes
}

var addNote = (title, body) => {
  var notes = getNotes();
  var note = {
    title,
    body
  }

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  })
  console.log('duplicateNotes', duplicateNotes);

  if (duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }
}

var getAll = () => {
  console.log('Getting all notes');
}

var removeNote = (title) => {
  console.log('Remove : ', title);
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