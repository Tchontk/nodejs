const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs // eslint-disable-line
  .options({
    address: {
      a: {
        describe: 'adress',
        demand: true,
        alias: 'a',
        string: true,
      },
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
