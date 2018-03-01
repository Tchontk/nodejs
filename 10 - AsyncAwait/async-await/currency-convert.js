// USD - CAD - 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:
const axios = require('axios');

const from = 'EUR'
const to = 'CAD'
const amount = 100

// const getExchangesRate = (from, to) => {
//   return axios
//     .get(`https://api.fixer.io/latest?base=${from}`)
//     .then((response) => {
//       return response.data.rates[to]
//     })
// }

// const getCountries = (currencyCode) => {
//   return axios
//     .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//     .then((response) => {
//       // return response.data.map((country) => {
//       //   return country.name
//       // })
//       return response.data.map((country) => country.name)
//     })
// }

// const convertCurrencyPromise = (from, to, amount) => {
//   let countries
//   return getCountries(to)
//     .then((countriesTemp) => {
//       countries = countriesTemp
//       return getExchangesRate(from, to)
//     })
//     .then((rate) => {
//       const exchangeAmount = amount * rate
//       return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries : ${countries.join(', ')} `
//       // console.log(countries);
//       // console.log(rate);
//     })
// }

// getExchangesRateA(from, to).then((rate) => {
//   console.log(rate); 
// }) 

// getCountriesA(to).then((countries) => {
//   console.log(countries);
// })

// convertCurrencyPromise(from, to, amount)
//   .then((status) => {
//     console.log('convertCurrencyPromise', status);
//   })

const getExchangesRate = async (from, to) => {
  try {
    const response = await axios.get(`https://api.fixer.io/latest?base=${from}`)
    const rate = response.data.rates[to]
    if (rate) {
      return rate
    } else {
      throw new Error()
    }
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}  `)
  }
}

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return response.data.map((country) => country.name)
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode} `)
  }
}

const convertCurrencyAsync = async (from, to, amount) => {
  const rate = await getExchangesRate(from, to)
  const countries = await getCountries(to)
  const exchangeAmount = amount * rate
  return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries : ${countries.join(', ')} `
  // const rate = await axios.get(`https://api.fixer.io/latest?base=${from}`)
  // const countries = await axios.get(`https://restcountries.eu/rest/v2/currency/${to}`)
  // const exchangeAmount = amount * rate.data.rates[to]
  // return `${amount} ${from} is worth ${exchangeAmount} ${to}. You can spend in the following countries : ${countries.data.map((country) => country.name).join(', ')} `
}

convertCurrencyAsync(from, to, amount)
  .then((status) => {
    console.log('convertCurrencyAsync', status);
  }).catch((e) => {
    console.log(e.message);
  })