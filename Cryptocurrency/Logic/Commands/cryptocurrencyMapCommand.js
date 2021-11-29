const coinMarketApi = require('../Services/coinMarketApi');
const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');

async function execute() 
{
    const cryptoMap = await coinMarketApi.cryptocurrencyMap();
    
    for(let i = 0; i < cryptoMap.length; i++){
        await addCryptoToDb(cryptoMap, i);
    }
}

async function addCryptoToDb(cryptoList, index){
    const existInDb = await isExistsInDb(cryptoList[index].symbol);

    if(existInDb){
        return;
    }

    const cryptocurrency = {
        name: cryptoList[index].name,
        symbol: cryptoList[index].symbol,
        logoUrl: ""
    } 

    cryptocurrencyRepository.create(cryptocurrency);
}

async function isExistsInDb(cryptoSymbol){
    const crypto = await cryptocurrencyRepository.getBySymbol(cryptoSymbol);

    if(crypto == undefined){
        return false;
    }

    return cryptoSymbol === crypto.symbol;
}



module.exports = {execute};