console.log('Starting App');

setTimeout(() => console.log('Inside of callback'), 2000);

setTimeout((a) => {
    console.log('Second setTimeout');
}, 0)

console.log('Finishing up');