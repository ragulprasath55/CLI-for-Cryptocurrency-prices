const CryptoAPI = require("../lib/CryptoAPI");
const KeyManager = require("../lib/KeyManager");
const colors = require('colors')

const check = {
    async getPrice(coin, cur) {
        // Formatter for currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: cur
        });

        const keyManager = new KeyManager()
        const key = keyManager.getKey()
        const cryptoAPI = new CryptoAPI(key);
        let price
        try {
            rawPrice = await cryptoAPI.getPrice(coin, cur);
            let output = ''
            rawPrice.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green
                    } | Rank: ${coin.rank.blue}\n`;
            });
            console.log(output);

        } catch (error) {
            console.log(error.message);
        }

    }
}

module.exports = check