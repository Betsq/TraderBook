const dataService = require("../../services/dataService");
const CoinMarketService = require("../../services/CoinMarketApi");
const cryptocurrencyService = require("../../services/cryptocurrencyService");
const response = require("../../../Core/Data/Response/spotTradeGetAllResponse");
const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(){
    const spotTradeDocuments = await spotTradeRepository.getAll();
    const cryptocurrencies = await getCryptocurrencies(spotTradeDocuments);
    const cryptocurrencyData = await getDataCryptocurrency(cryptocurrencies);
    
    return formationResponse(spotTradeDocuments, cryptocurrencyData, cryptocurrencies);
}

function formationResponse(spotTradeDocuments, cryptocurrencyData, cryptocurrencies){
    let res = [];

    for(let trade of spotTradeDocuments){
        const cryptocurrency = findCryptocurrency(cryptocurrencies, trade.cryptocurrencyId);
        
        const data = cryptocurrencyService.formationData(cryptocurrencyData, cryptocurrency.symbol, trade.entryPrice);
        
        res.push(new response.SpotTradeGetAllResponse(trade, cryptocurrency, data));
    }
    
    return res;
}

function findCryptocurrency(cryptocurrencies, id){
    for(let i = 0; i < cryptocurrencies.length; i++){
        if(cryptocurrencies[i].id === id) return cryptocurrencies[i];
    }
}

async function getCryptocurrencies(spotTradeDocuments){
    const cryptocurrencyIds = getIdsCryptocurrency(spotTradeDocuments);

    return await dataService.getCryptocurrencyByIds(cryptocurrencyIds);
}

async function getDataCryptocurrency(spotTradeDocuments, cryptocurrencies) {
    const symbols = getSymbols(spotTradeDocuments, cryptocurrencies);

    return await CoinMarketService.dataCoin(symbols);
}

function getSymbols(cryptocurrencies){
    let symbols = "";

    for(let i = 0; i < cryptocurrencies.length; i++){
        if(cryptocurrencies.length == i + 1){
            symbols += cryptocurrencies[i].symbol
        } else{
            symbols += cryptocurrencies[i].symbol + ",";
        }
    }

    return symbols;
}

function getIdsCryptocurrency(spotTradeDocuments){
    let cryptocurrencyIds = [];

    for(let trade of spotTradeDocuments){
        if(isExistsInArray(cryptocurrencyIds, trade.cryptocurrencyId)){
            continue;
        }

        cryptocurrencyIds.push(trade.cryptocurrencyId);
    }

    return cryptocurrencyIds;
}

function isExistsInArray(arr, elem){
    return arr.indexOf(elem) != -1;
}

module.exports = {execute};