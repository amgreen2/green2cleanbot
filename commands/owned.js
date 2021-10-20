const message = require("discord.js")

module.exports = {
    name: 'owned',
    description: "owned NFTs",
    execute(message, args){
        message.channel.send('https://api.opensea.io/api/v1/collections?asset_owner=0xc724c231Af2A7494BDe4e49ef590214117B207bF')
    }
}