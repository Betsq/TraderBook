function formationData(cryptocurrencyData, symbol, entryPrice){
    if(cryptocurrencyData == undefined){
        return;
    }

    
    return {price: cryptocurrencyData[symbol].quote.USD.price,
            percent_change_24h: cryptocurrencyData[symbol].quote.USD.percent_change_24h,
            percent_change_7d: cryptocurrencyData[symbol].quote.USD.percent_change_7d,
            percent_change_all_time: calculatePercentChangeAllTime(entryPrice, cryptocurrencyData[symbol].quote.USD.price)};
}

function calculatePercentChangeAllTime(entryPrice, priceNow){
    return (priceNow - entryPrice) / priceNow * 100;
}

module.exports = {formationData};   