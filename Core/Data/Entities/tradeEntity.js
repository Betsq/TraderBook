const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function tradeEntitySchema(){
    return new Schema({
        date: Date,
        pair: String,
        position: String,
        entryPrice: Number,
        volume: Number,
        shoulder: Number,
        stop: Number,
        takeProfit: Number,
        exitPrice: Number,
        time: Date,
        comment: String,
        profitOrLoss: Number,
        percent: Number
    });
}

const nameDocument = "Trade";

module.exports = {tradeEntitySchema, nameDocument}

