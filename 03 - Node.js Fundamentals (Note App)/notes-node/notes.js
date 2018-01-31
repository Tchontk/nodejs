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

var addNote = (title, body) => {
  console.log('Adding note : ', title, body);
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