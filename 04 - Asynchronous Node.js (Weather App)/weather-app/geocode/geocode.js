const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect');
    } else if (body.status !== 'OK') {
      callback(`Error : '${body.status}`);
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
      });
    } else {
      callback(`Error : ${response.statusCode}`);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;