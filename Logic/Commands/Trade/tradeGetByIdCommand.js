const tradeRepository = require("../../../DataAccess/Repository/Trade/tradeRepository");

async function execute(id) 
{
    return await tradeRepository.getById(id)
}

module.exports = {execute};