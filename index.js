require("dotenv").config();
require('heroku-self-ping').default(`https://${env.process.APP_NAME}.herokuapp.com/`);
//const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const functions = require('./functions/functions')
const discord = require('discord.js')
const client = new discord.Client()
const command = require('./commands/command')
app.use(express.json());
app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port 5000");
    });
client.on('ready', msg => {
    console.log('The client is ready!')
    command(client, ['ping', 'cup'], message => {
        message.channel.send('Pong!')
    })//check how many members in server
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
        })
    })//clear channel chat
    command(client, ['cc', 'clearchannel'], message => {
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) => {
                //console.log(results)
                message.channel.bulkDelete(results)
            })
        }
    })//update bot status
    command(client, 'status', message => {
        const content = message.content.replace('!status ', '')
        client.user.setPresence({
            activity: {
                name: content,
                type: 0,
            },
        })
    })//pull image from fear and greed index website
    command(client, ['fear', 'greed'], message => {
        message.channel.send({files: ["https://alternative.me/crypto/fear-and-greed-index.png"]})
    })// pull api for random nice quote
    command(client, ['quote'], message => {
        functions.getQuote().then(res => {
        message.channel.send(res)
        })
    })// pull api for random dad joke
    command(client, ['joke'], message => {
        functions.getJoke().then(res => {
        message.channel.send(res)
        })
    })//pull api for jokes
    command(client, ['chuck'], message => {
        functions.getChuck().then(res => {
        message.channel.send(res)
        })
    })//pull api for floor prices
    command(client, ['floor'], message => {
        functions.getFloor().then(res => {
            message.channel.send(res)
        })
    })
})
var http = require("http");
setInterval(function() {
    http.get(`https://${env.process.APP_NAME}.herokuapp.com/`);
}, 4500000); // every 75 minutes (4500000)
const request = require('request');
const ping = () => request(`https://${env.process.APP_NAME}.herokuapp.com/`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print body of response received
});
setInterval(ping, 20*60*1000); // I have set to 20 mins interval
client.login(process.env.BOT_KEY)