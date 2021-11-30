class CryptocurrencyDto {
    constructor(cryptocurrency){
        this.id = cryptocurrency._id;
        this.name = cryptocurrency.name;
        this.symbol = cryptocurrency.symbol;
        this.logoUrl = cryptocurrency.logoUrl;
    }
}

module.exports = {CryptocurrencyDto}