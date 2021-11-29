const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function entitySchema(){
    return new Schema({
        name: String,
        symbol: String,
        logoUrl: String
    });
}

const nameDocument = "Cryptocurrency";

module.exports = {entitySchema, nameDocument}

