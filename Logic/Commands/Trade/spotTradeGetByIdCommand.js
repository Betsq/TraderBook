const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(id) 
{
    return await spotTradeRepository.getById(id)
}

module.exports = {execute};