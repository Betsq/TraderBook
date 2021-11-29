class CryptocurrencyDto {
    constructor(cryptocurrency){
        this.id = cryptocurrency.id;
        this.name = cryptocurrency.name;
        this.symbol = cryptocurrency.symbol;
        this.logoUrl = cryptocurrency.logoUrl;
    }
}

module.exports = {CryptocurrencyDto}