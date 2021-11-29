const rp = require('request-promise');
const api_key = require('../../../Trade/CoinMarketApiKey');

const requestOptions = {
  method: 'GET',
  uri: '',
  headers: {
    'X-CMC_PRO_API_KEY': api_key
  },
  json: true,
  gzip: true
};

async function cryptocurrencyMap(){
  requestOptions.uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map";

  return await rp(requestOptions).then((response) => {return response.data}).catch((err) => {return undefined});
}

module.exports = {cryptocurrencyMap}