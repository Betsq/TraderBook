const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(id, request) 
{
    if(request == undefined || Object.entries(request).length == 0){
        return "Failed. Object is empty";
    }
    
    return await spotTradeRepository.update(id, request);
}

module.exports = {execute};