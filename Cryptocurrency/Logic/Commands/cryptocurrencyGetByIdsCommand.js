const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');

async function execute(ids){
    return await cryptocurrencyRepository.getByIds(ids);
}

module.exports = {execute};