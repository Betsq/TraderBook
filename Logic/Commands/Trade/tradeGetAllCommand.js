const tradeRepository = require("../../../DataAccess/Repository/Trade/tradeRepository");

async function execute() 
{
    return await tradeRepository.getAll()
}

module.exports = {execute};