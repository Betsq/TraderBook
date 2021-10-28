const mongoose = require("mongoose");
const tradeEntity = require("../Core/Data/Entities/tradeEntity")

const urlToDb = "mongodb://localhost:27017/TraderBookDb";

mongoose.connect(urlToDb, {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("error", console.error.bind(console, "Connection error: "));

mongoose.connection.once("open", () => console.log("Connection To Db Successful!"));

function disconnect(){
    mongoose.disconnect();
}

const Trade = mongoose.model(tradeEntity.nameDocument, tradeEntity.tradeEntitySchema());

module.exports = {disconnect, Trade};