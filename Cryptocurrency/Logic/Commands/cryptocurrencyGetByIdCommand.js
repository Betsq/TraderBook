const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');

async function execute(id){
    return await cryptocurrencyRepository.getById(id);
}

module.exports = {execute};