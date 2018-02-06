var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be number')
      }
    }, 2000);
  })
}
asyncAdd(1, 6).then((resolve) => {
  console.log('Result 1 : ', resolve);
  return asyncAdd(resolve, "a");
}).then((res) => {
  console.log('Result 2 : ', res);
}).catch((reject) => {
  console.log('reject : ', reject);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked')
//         reject('Unable to fulfill promise')
//     }, 2000);
// })

// somePromise.then((message) => {
//     console.log('Succes ' + message);
// }, (errorMessage) => {
//     console.log('Error : ' + errorMessage);
// })