const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');

async function execute(name){
    return await cryptocurrencyRepository.getByName(name);
}

module.exports = {execute};