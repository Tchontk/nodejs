// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

// var obj = new ObjectID()
// console.log(obj);

/*
var user = {
  name: 'A',
  age: 26
};
var {
  name
} = user
console.log(name);
*/
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log('Unable to connect to mongodb Server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'A'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'A',
    age: 25
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  client.close();
})