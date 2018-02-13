const expect = require('expect')
const utils = require('./utils')

it('Should add two numbers', () => {
  res = utils.add(33, 11)
  expect(res).toBe(44).toBeA('number')
});

it('Should square a number', () => {
  res = utils.square(3)
  expect(res).toBe(9).toBeA('number')
});

it('Should expect some values', () => {
  expect(12).toBe(12)
  expect({
    name: "a"
  }).toEqual({
    name: "a"
  })
  expect([1, 2, 3, 4]).toInclude(2)
  expect([1, 2, 3, 4]).toExclude(5)
  expect({
    name: 'a',
    age: 21,
    location: 'Fr'
  }).toInclude({
    age: 21
  })
})

it('Should verify first and names are set', () => {
  var user = {
    age: 25
  }
  res = utils.setName(user, 'AA BB')
  expect(res).toInclude({
    firstName: 'AA',
    lastName: 'BB'
  })
});

it('Should async add two numbers', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done()
  })
});

it('Should square a number', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done()
  })
});