const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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

geocode.geocodeAddress(argv.a)