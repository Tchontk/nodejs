const expect = require('expect')
const utils = require('./utils')

it('Should add two numbers', () => {
  res = utils.add(33, 11)
  if (res !== 44) {
    throw new Error(`Exprected 44, but got ${res}`)
  }
});

it('Should square a number', () => {
  res = utils.square(3)
  if (res !== 9) {
    throw new Error(`Exprected 9, but got ${res}`)
  }
});