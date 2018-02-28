// USD - CAD - 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
const axios = require('axios');

const base = 'USD'
const search = 'CAD'
const fixerUrl = `https://api.fixer.io/latest?base=`
const restCountriesUrl = `https://restcountries.eu/rest/v2/currency/`

const fixerUrlSearch = fixerUrl + base
const restCountriesUrlSearch = restCountriesUrl + base
console.log(restCountriesUrlSearch);

const getRates = async (userId) => {
  const rates = await axios.get(fixerUrlSearch)
  const restCountries = await axios.get(restCountriesUrlSearch)
  console.log(rates.data.rates);
  console.log(restCountries.data[0].name);
}
getRates()