class SpotTradeCreateRequest {
    constructor(spotTrade){
        this.purchasePrice = spotTrade.purchasePrice,
        this.entryPrice = spotTrade.entryPrice,
        this.entryDate = spotTrade.entryDate,
        this.volume = spotTrade.volume,
        this.market = spotTrade.market,
        this.cryptocurrencyId = spotTrade.cryptocurrencyId
    }
}

module.exports = {SpotTradeCreateRequest}