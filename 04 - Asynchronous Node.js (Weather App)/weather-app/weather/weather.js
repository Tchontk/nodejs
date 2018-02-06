const request = require('request');
const APIKey = require('./APIKey');

const getweather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${APIKey.API_KEY_WEATHER}/${latitude},${longitude}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        timezone: body.timezone,
        latitude: body.latitude,
        longitude: body.longitude,
        time: body.currently.time,
      });
    } else if (error) {
      callback('Unable to connect');
    } else {
      callback(
        `Enable to fetch weather - Error : ${response.statusCode}`
      );
    }
  });
};

module.exports.getweather = getweather;