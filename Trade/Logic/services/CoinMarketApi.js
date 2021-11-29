const rp = require('request-promise');
const api_key = require('../../CoinMarketApiKey');
const cryptocurrencyDataDto = require('../../Core/Data/Dto/cryptocurrencyDataDto');

const requestOptions = {
  method: 'GET',
  uri: '',
  headers: {
    'X-CMC_PRO_API_KEY': api_key
  },
  json: true,
  gzip: true
};

async function dataCoin(symbol){
    requestOptions.uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" + symbol;

    return await rp(requestOptions).then((response) => {return response.data; }).catch((err) => {return undefined});
}


module.exports = {dataCoin}