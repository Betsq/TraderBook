const tradeRepository = require("../../../DataAccess/Repository/Trade/tradeRepository");

async function execute(id, request) 
{
    if(request == undefined || Object.entries(request).length == 0){
        return "Failed. Object is empty";
    }
    
    return await tradeRepository.update(id, request);
}

module.exports = {execute};