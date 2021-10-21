const Discord = require('discord.js');
const commando = require('discord.js-commando');
const prefix = '!';
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require(`./config.json`)

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    //console.log("command:: ", command)
    client.commands.set(command.name, command)
}
client.once('ready',() => {
    console.log('Bot online')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    }
    else if (command === 'owned'){
        client.commands.get('owned').execute(message, args)
    }
    else if (command === 'floor'){
        client.commands.get('floor').execute(message, args)
    }
    else if (command === 'meme'){
        client.commands.get('meme').execute(message, args)
    }
});
client.login(config.token)
