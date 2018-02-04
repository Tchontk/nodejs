const request = require('request');

const geocodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2));
    // body.results.forEach(result => {
    //     console.log(JSON.stringify(result.geometry, undefined,
    //         2));
    // });
    if (error) {
      // error ==> host not found
      console.log('Unable to connect');
    } else if (body.status !== 'OK') {
      console.log(`Error : '${body.status}`);
    } else if (body.status === 'OK') {
      // console.log(JSON.stringify(response, undefined, 2));
      console.log(`Address : ${body.results[0].formatted_address}`);
      console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    } else {
      console.log(`Error : ${response.statusCode}`);
    }
  });
};

// module.exports = {
//     geocodeAddress
// };

module.exports.geocodeAddress = geocodeAddress;
