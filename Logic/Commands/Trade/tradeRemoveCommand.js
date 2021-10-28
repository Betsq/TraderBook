const tradeRepository = require("../../../DataAccess/Repository/Trade/tradeRepository");

async function execute(id) 
{
    await tradeRepository.remove(id)
}

module.exports = {execute};