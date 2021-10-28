const tradeRepository = require("../../../DataAccess/Repository/Trade/tradeRepository");

async function execute(request) 
{
    if(request == undefined || Object.entries(request).length == 0){
        return "Failed. Object is empty";
    }

    return await tradeRepository.create(request);
}

module.exports = {execute};