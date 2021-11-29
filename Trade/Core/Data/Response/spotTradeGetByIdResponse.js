const spotTradeDto = require('../Dto/spotTradeDto');
const cryptocurrencyDto = require('../Dto/cryptocurrencyDto');

class SpotTradeGetByIdResponse {
    constructor(spotTrade, cryptocurrency){
            this.tradeInfo = new spotTradeDto.SpotTradeDto(spotTrade),
            this.cryptocurrency = new cryptocurrencyDto.CryptocurrencyDto(cryptocurrency);
    }
}

module.exports = {SpotTradeGetByIdResponse}