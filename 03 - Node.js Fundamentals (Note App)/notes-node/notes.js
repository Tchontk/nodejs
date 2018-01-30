console.log('Starting notes.js');
console.log(module.exports);

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.age = 25;

module.exports.add = (a, b) => {
  return a + b;
};