const tradeCreateCommand = require("../../Logic/Commands/Trade/tradeCreateCommand");
const tradeGetAllCommand = require("../../Logic/Commands/Trade/tradeGetAllCommand");
const tradeGetByIdCommand = require("../../Logic/Commands/Trade/tradeGetByIdCommand");
const tradeRemoveCommand = require("../../Logic/Commands/Trade/tradeRemoveCommand");
const tradeUpdateCommand = require("../../Logic/Commands/Trade/tradeUpdateCommand")

async function create(req, res){
    const response = await tradeCreateCommand.execute(req.body);

    res.send(response);
}

async function getAll(req, res) {
    const response  = await tradeGetAllCommand.execute();

    res.send(response);
}

async function getById(req, res){
    const response = await tradeGetByIdCommand.execute(req.query.id);

    if(response == undefined){
        res.status(404).send(response);
    }
    else{
        res.send(response);
    }    
}

async function update(req, res){
    await tradeUpdateCommand.execute(req.query.id, req.body)
    
    res.status(200).send();
}

async function remove(req, res){
    await tradeRemoveCommand.execute(req.query.id)

    res.status(200).send();
}

module.exports = {create, getAll, getById, update,remove};