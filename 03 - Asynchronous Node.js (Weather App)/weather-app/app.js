const request = require('request')


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia',
    json: true
}, (error, response, body) => {
    // error ==> host not found
    // console.log(JSON.stringify(response, undefined, 2));
    // body.results.forEach(result => {
    //     console.log(JSON.stringify(result.geometry, undefined,
    //         2));
    // });
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})