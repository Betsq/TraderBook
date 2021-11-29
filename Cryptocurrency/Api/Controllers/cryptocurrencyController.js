const cryptocurrencyMapCommand = require("../../Logic/Commands/cryptocurrencyMapCommand");
const cryptocurrencyGetByNameCommand = require("../../Logic/Commands/cryptocurrencyGetByNameCommand");
const cryptocurrencyGetAllCommand = require("../../Logic/Commands/cryptocurrencyGetAllCommand");
const cryptocurrencyGetByIdsCommand = require("../../Logic/Commands/cryptocurrencyGetByIdsCommand");
const cryptocurrencyGetByIdCommand = require("../../Logic/Commands/cryptocurrencyGetByIdCommand");

async function cryptocurrencyMap(req, res){
    await cryptocurrencyMapCommand.execute();

    res.status(200).send();
}

async function getCryptocurrencyByName(req, res){
    const response = await cryptocurrencyGetByNameCommand.execute(req.query.name);

    res.send(response);
}

async function getAllCryptocurrency(req, res){
    const response = await cryptocurrencyGetAllCommand.execute(); 

    res.send(response);
}

async function getByIds(req, res){
    const response = await cryptocurrencyGetByIdsCommand.execute(req.body.ids);

    res.send(response);
}

async function getById(req, res){
    const response = await cryptocurrencyGetByIdCommand.execute(req.query.id);

    res.send(response);
}

module.exports = {cryptocurrencyMap, getCryptocurrencyByName, getAllCryptocurrency, getByIds, getById};