const yargs = require('yargs');
const axios = require('axios');
const APIKey = require('./weather/APIKey');

const argv = yargs // eslint-disable-line
  .options({
    a: {
      describe: 'address',
      demand: true,
      alias: 'address',
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address')
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
      throw new Error(response.data.status)
    } else {
      var latitude = response.data.results[0].geometry.location.lat
      var longitude = response.data.results[0].geometry.location.lng
      var weatherUrl = `https://api.darksky.net/forecast/${APIKey.API_KEY_WEATHER}/${latitude},${longitude}`
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl)
    }
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Currently ${temperature}. It feels like ${apparentTemperature}`);
  }).catch((error) => {
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API server');
    } else {
      console.log(error.message);
    }
  })