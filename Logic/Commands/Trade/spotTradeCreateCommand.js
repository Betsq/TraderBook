const spotTradeRepository = require("../../../DataAccess/Repository/Trade/spotTradeRepository");

async function execute(request) 
{
    if(request == undefined || Object.entries(request).length == 0){
        return "Failed. Object is empty";
    }

    return await spotTradeRepository.create(request);
}

module.exports = {execute};