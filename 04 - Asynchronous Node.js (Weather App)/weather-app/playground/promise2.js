const request = require('request');
var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect');
      } else if (body.status === 'ZERO_RESULTS') {
        reject(`${body.status}`);
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        });
      } else {
        reject(`${response.statusCode}`);
      }
    });
  })
};

geocodeAddress('Paris')
  .then((location) => {
    console.log('location : ', JSON.stringify(location, undefined, 2));
  }).catch((reject) => {
    console.log('Error : ', reject);
  })