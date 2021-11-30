const dataService = require("../../services/dataService");
const coinMarketApiService = require("../../services/CoinMarketApi");
const cryptocurrencyService = require("../../services/cryptocurrencyService");
const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");
const spotTradeGetByIdResponse = require("../../../Core/Data/Response/spotTradeGetByIdResponse");

async function execute(id) 
{
    const spotTrade = await spotTradeRepository.getById(id)
    const cryptocurrency = await dataService.getCryptocurrencyById(spotTrade.cryptocurrencyId);
    const cryptocurrencyQuote = await coinMarketApiService.dataCoin(cryptocurrency.symbol);

    const cryptocurrencyData = cryptocurrencyService.formationData(cryptocurrencyQuote, cryptocurrency.symbol, spotTrade.entryPrice);

    let spotTradeDto = new spotTradeGetByIdResponse.SpotTradeGetByIdResponse(spotTrade, cryptocurrency, cryptocurrencyData);

    return spotTradeDto;
}

module.exports = {execute};