const request = require('request')
const yargs = require('yargs')

const argv = yargs
    // .command('search', 'Search address', {
    //     address: {
    //         describe: 'adress',
    //         demand: true,
    //         alias: 'a'
    //     }
    // })
    .options({
        address: {
            a: {
                describe: 'adress',
                demand: true,
                alias: 'a',
                string: true
            }
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.a)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    // error ==> host not found
    // console.log(JSON.stringify(response, undefined, 2));
    // body.results.forEach(result => {
    //     console.log(JSON.stringify(result.geometry, undefined,
    //         2));
    // });
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(
        `Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(
        `Longitude : ${body.results[0].geometry.location.lng}`);
})