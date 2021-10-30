const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function entitySchema(){
    return new Schema({
        name: String,
        purchasePrice: Number,
        entryPrice: Number,
        entryDate: Date,
        volume: Number,
        Market: String
    });
}

const nameDocument = "SpotTrade";

module.exports = {entitySchema, nameDocument}

