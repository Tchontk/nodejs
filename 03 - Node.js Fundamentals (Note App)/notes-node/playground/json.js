// var obj = {
//   name: "Hello"
// }
// var stringObj = JSON.stringify(obj)

// console.log(typeof obj); // object
// console.log(typeof stringObj); // string
// console.log(obj);
// console.log(stringObj);

// var personString = '{"name": "An", "age":25}'
// var person = JSON.parse(personString)
// console.log(typeof person);
// console.log(person);


const fs = require('fs'); // https://nodejs.org/api/fs.html

var originalNote = {
  title: 'Some !',
  body: 'Some body'
}
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString)
console.log(note.title);
console.log(typeof note);