const spotTradeCreateCommand = require("../../Logic/Commands/Trade/spotTradeCreateCommand");
const spotTradeGetAllCommand = require("../../Logic/Commands/Trade/spotTradeGetAllCommand");
const spotTradeGetByIdCommand = require("../../Logic/Commands/Trade/spotTradeGetByIdCommand");
const spotTradeRemoveCommand = require("../../Logic/Commands/Trade/spotTradeRemoveCommand");
const spotTradeUpdateCommand = require("../../Logic/Commands/Trade/spotTradeUpdateCommand")

async function create(req, res){
    if(!req.body){
        return res.sendStatus(400);
    }

    const response = await spotTradeCreateCommand.execute(req.body);

    res.send(response);
}

async function getAll(req, res) {
    const response  = await spotTradeGetAllCommand.execute();

    res.send(response);
}

async function getById(req, res){
    const response = await spotTradeGetByIdCommand.execute(req.query.id);

    if(response == undefined){
        res.status(404).send(response);
    }
    else{
        res.send(response);
    }    
}

async function update(req, res){
    await spotTradeUpdateCommand.execute(req.query.id, req.body)
    
    res.status(200).send();
}

async function remove(req, res){
    await spotTradeRemoveCommand.execute(req.query.id)

    res.status(200).send();
}

module.exports = {create, getAll, getById, update,remove};