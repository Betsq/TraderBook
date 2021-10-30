const mongoose = require("mongoose");
const spotTradeEntity = require("../Core/Data/Entities/spotTradeEntity")

const urlToDb = "mongodb://localhost:27017/TraderBookDb";

mongoose.connect(urlToDb, {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("error", console.error.bind(console, "Connection error: "));

mongoose.connection.once("open", () => console.log("Connection To Db Successful!"));

function disconnect(){
    mongoose.disconnect();
}

const SpotTrade = mongoose.model(spotTradeEntity.nameDocument, spotTradeEntity.entitySchema());

module.exports = {disconnect, SpotTrade};