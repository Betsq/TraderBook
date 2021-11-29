const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(request) 
{
    return await spotTradeRepository.create(request);
}

module.exports = {execute};