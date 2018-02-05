const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
        // return undefined;
    }
    console.log(results.address);
    weather.getweather(results.latitude, results.longitude, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage);
            // return undefined;
        }
        console.log(`Currently ${results.temperature}. It feels like ${results.apparentTemperature}`);
        // console.log(JSON.stringify(results, undefined, 2));
        // return results;
    });
    // console.log(JSON.stringify(results, undefined, 2));
    // return results;
});