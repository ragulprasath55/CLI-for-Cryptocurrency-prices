const Configstore = require("configstore")


class keyManager {
    constructor() {
        this.conf = new Configstore('key')
    }

    getKey() {
        const key = this.conf.get('KEY')
        if (!key) {
            throw new Error('Key not found')
        }

        return key
    }

    setKey(key) {
        this.conf.set('KEY', key)
        return key
    }
}

module.exports = keyManager