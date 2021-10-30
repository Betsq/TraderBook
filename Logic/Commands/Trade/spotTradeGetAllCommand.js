const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute() 
{
    return await spotTradeRepository.getAll()
}

module.exports = {execute};