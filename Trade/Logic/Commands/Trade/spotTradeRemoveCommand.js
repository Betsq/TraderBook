const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(id) 
{
    await spotTradeRepository.remove(id)
}

module.exports = {execute};