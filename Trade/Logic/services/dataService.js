const rp = require('request-promise');
const cryptocurrencyDto = require("../../Core/Data/Dto/cryptocurrencyDto");

const urlToCryptocurrency = "http://localhost:3001";

async function getCryptocurrencyByIds(cryptoIds){
  const requestOptions = {
    method: 'POST',
    uri: `${urlToCryptocurrency}/cryptocurrency/GetByIds`,
    body: {
      ids: cryptoIds
    }
  };
  
  return await rp(requestOptions).then((response) => {return response}).catch((err) => {return undefined});
}

async function getCryptocurrencyById(cryptoId){
  const requestOptions = {
    method: 'Get',
    uri: `${urlToCryptocurrency}/cryptocurrency/GetById?id=${cryptoId}`,
    json: true
  };
  
  return await rp(requestOptions).then((response) => {return new cryptocurrencyDto.CryptocurrencyDto(response)}).catch((err) => {return undefined});
}

module.exports = {getCryptocurrencyByIds, getCryptocurrencyById}