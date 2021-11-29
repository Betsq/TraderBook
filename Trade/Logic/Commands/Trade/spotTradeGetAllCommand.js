const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");
const response = require("../../../Core/Data/Response/spotTradeGetAllResponse")
const CoinMarketService = require("../../services/CoinMarketApi")

async function execute(){
    const spotTradesDocuments = await spotTradeRepository.getAll()
    
    const symbols = getSymbols(spotTradesDocuments);

    const dataCoins = await CoinMarketService.dataCoin(symbols);

    let res = [];

    for(let trade of spotTradesDocuments){
        const quotes = getDataCoin(dataCoins, trade.symbol, trade.entryPrice);

        res.push(new response.SpotTradeGetAllResponse(trade, quotes));
    }
    
    return res;
}
function getSymbols(spotTradesDocuments){
    let symbols = "";

    for(let i = 0; i < spotTradesDocuments.length; i++){
        if(spotTradesDocuments.length == i + 1){
            symbols += spotTradesDocuments[i].symbol
        } else{
            symbols += spotTradesDocuments[i].symbol + ",";
        }
    }

    return symbols;
}

function getDataCoin(dataCoins, symbol, entryPrice){
    if(dataCoins == undefined){
        return
    }

    return {price: dataCoins[symbol].quote.USD.price,
            percent_change_24h: dataCoins[symbol].quote.USD.percent_change_24h,
            percent_change_7d: dataCoins[symbol].quote.USD.percent_change_7d,
            percent_change_all_time: calculatePercentChangeAllTime(entryPrice, dataCoins[symbol].quote.USD.price)};
}

function calculatePercentChangeAllTime(entryPrice, priceNow){
    return (priceNow - entryPrice) / priceNow * 100;
}

module.exports = {execute};