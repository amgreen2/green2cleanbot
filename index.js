require("dotenv").config();
//const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const functions = require('./functions/functions')
const discord = require('discord.js')
const client = new discord.Client()
const command = require('./commands/command')
app.use(express.json());

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

client.login(process.env.BOT_KEY)