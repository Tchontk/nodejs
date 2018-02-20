const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = '123abc!'

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash', hash);
    console.log('salt', salt);
  })
})

var hashedPassword = '$2a$10$/W/Opr4twSq/oq5yOqtNJuuSs6COJow5RStDspQ5XaGuFUZhw3cZ6'
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

var data = { id: '4' }
var token = jwt.sign(data, 'mySecret')
console.log('token', token);

var decoded = jwt.verify(token, 'mySecret')
console.log('decoded', decoded);

// const { SHA256 } = require('crypto-js')

// var message = 'I am user number 6'
// var hash = SHA256(message).toString()
// console.log(`Message : ${message}`);
// console.log(`hash : ${hash}`);

// var data = { id: 4 }

// var token = { 
//   data,
//   hash: SHA256(JSON.stringify(data + 'mySecret').toString())
// }
// token.data.id = 5

// var resultHash = SHA256(JSON.stringify(token.data) + 'mySecret').toString()

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Don ot trust !');
// }