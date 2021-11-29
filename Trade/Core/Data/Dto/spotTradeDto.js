class SpotTradeDto {
        constructor(spotTrade){
                this.id = spotTrade._id,
                this.purchasePrice = spotTrade.purchasePrice,
                this.entryPrice = spotTrade.entryPrice,
                this.entryDate = spotTrade.entryDate,
                this.volume = spotTrade.volume,
                this.market = spotTrade.market
        }
}

module.exports = {SpotTradeDto}