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

const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`
const weatherUrl = `https://api.darksky.net/forecast/`
const encodedAddress = encodeURIComponent(argv.address);

const geocodeUrlSearch = `${geocodeUrl}${encodedAddress}`

axios.get(geocodeUrlSearch)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address')
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
      throw new Error(response.data.status)
    } else {
      const latitude = response.data.results[0].geometry.location.lat
      const longitude = response.data.results[0].geometry.location.lng
      const weatherUrlSearch = `${weatherUrl}${APIKey.API_KEY_WEATHER}/${latitude},${longitude}`
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrlSearch)
    }
  }).then((response) => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Currently ${temperature}. It feels like ${apparentTemperature}`);
  }).catch((error) => {
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API server');
    } else {
      console.log(error.message);
    }
  })