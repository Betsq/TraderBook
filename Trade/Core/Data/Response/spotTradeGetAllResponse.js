const cryptocurrencyDto = require("../Dto/cryptocurrencyDto");
const cryptocurrencyDataDto = require("../Dto/cryptocurrencyDataDto");
const spotTradeDto = require("../Dto/spotTradeDto");

class SpotTradeGetAllResponse{
    constructor(spotTrade, cryptocurrency, cryptocurrencyData){
        this.tradeInfo = new spotTradeDto.SpotTradeDto(spotTrade);
        this.cryptocurrency = new cryptocurrencyDto.CryptocurrencyDto(cryptocurrency);
        this.cryptocurrencyData = new cryptocurrencyDataDto.CryptocurrencyDataDto(cryptocurrencyData);
    }
}

module.exports = {SpotTradeGetAllResponse}