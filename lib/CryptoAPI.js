const { default: axios } = require("axios");

class CryptoAPI {
    constructor(API_KEY) {
        this.baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}`;
    }

    async getPrice(coin, cur) {
        try {
            const price = await axios.get(`${this.baseUrl}&ids=${coin}&convert=${cur}`)
            return price
        } catch (e) {
            let message;
            if (e.response.status === 401) {
                message = 'Your API key is invalid - Go to https://nomics.com'
            } else if (e.response.status === 404) {
                message = 'Requested Resource is missing. Please check your url'
            } else {
                message = 'Oops! Something went wrong'
            }
            throw new Error(message);
        }
    }

}

module.exports = CryptoAPI