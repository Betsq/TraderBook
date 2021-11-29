const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");
const dataService = require("../../services/dataService")
const spotTradeGetByIdResponse = require("../../../Core/Data/Response/spotTradeGetByIdResponse")

async function execute(id) 
{
    const spotTrade = await spotTradeRepository.getById(id)
    const cryptocurrency = await dataService.getCryptocurrencyById(spotTrade.cryptocurrencyId);

    let spotTradeDto = new spotTradeGetByIdResponse.SpotTradeGetByIdResponse(spotTrade, cryptocurrency);

    return spotTradeDto;
}

module.exports = {execute};