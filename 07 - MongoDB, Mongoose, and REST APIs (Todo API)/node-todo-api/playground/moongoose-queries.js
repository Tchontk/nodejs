const {
  moongose
} = require('./../server/db/mongoose')
const {
  Todo
} = require('./../server/models/todo')
const {
  ObjectId
} = require('mongodb')

var id = '5a84a02b2d9c00f44947858'

if (!ObjectId.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  text: 'hello'
}).then((todos) => {
  console.log('Todos', todos);
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
})

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todos By Id', todo);
}).catch((e) => console.log(e));