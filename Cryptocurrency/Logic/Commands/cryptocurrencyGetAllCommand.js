const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');

async function execute(){
    return await cryptocurrencyRepository.getAll();
}

module.exports = {execute};