const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function entitySchema(){
    return new Schema({
        cryptocurrencyId : String,
        purchasePrice: Number,
        entryPrice: Number,
        entryDate: Date,
        volume: Number,
        market: String
    });
}

const nameDocument = "SpotTrade";

module.exports = {entitySchema, nameDocument}

