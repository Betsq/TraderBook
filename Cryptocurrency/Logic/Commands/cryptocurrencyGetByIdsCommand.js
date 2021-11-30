const cryptocurrencyRepository = require('../../Data/Repositories/cryptocurrencyRepository');
const cryptocurrencyDto = require('../../Core/Data/Dtos/cryptocurrencyDto')

async function execute(ids){
    const cryptocurrencies = await cryptocurrencyRepository.getByIds(ids);

    let cryptocurrenciesDto = [];

    for(let i = 0; i < cryptocurrencies.length; i++){
        cryptocurrenciesDto.push(new cryptocurrencyDto.CryptocurrencyDto(cryptocurrencies[i]));
    }

    return cryptocurrenciesDto;
}

module.exports = {execute};