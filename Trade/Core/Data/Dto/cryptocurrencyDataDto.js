class CryptocurrencyDataDto {
    constructor(cryptocurrencyData){
        this.price = cryptocurrencyData.price;
        this.percent_change_24h = cryptocurrencyData.percent_change_24h;
        this.percent_change_7d = cryptocurrencyData.percent_change_7d;
        this.percent_change_all_time = cryptocurrencyData.percent_change_all_time;
    }
}

module.exports = {CryptocurrencyDataDto};