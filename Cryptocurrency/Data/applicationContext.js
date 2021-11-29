const mongoose = require("mongoose");
const cryptocurrencyEntity = require("../Core/Entities/cryptocurrencyEntity");

const urlToDb = "mongodb://localhost:27017/Cryptocurrency";

mongoose.connect(urlToDb, {useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("error", console.error.bind(console, "Connection error: "));

mongoose.connection.once("open", () => console.log("Connection To Db Successful!"));

function disconnect(){
    mongoose.disconnect();
}

const Cryptocurrency = mongoose.model(cryptocurrencyEntity.nameDocument, cryptocurrencyEntity.entitySchema());

module.exports = {disconnect, Cryptocurrency};