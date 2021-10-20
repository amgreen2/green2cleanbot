// const { MessageActionRow } = require("discord.js")
// const { prefix } = require('./config.json')
// import fetch from './node-fetch';
// //import axios from './axios.js';

// const botChan = 'https://discord.com/api/webhooks/896968627138465792/qWyEe86XfW-aUig0fweOeHzrNOajvXWtWsd1uf0b0WVGO0rU2AXI-qCNXqkeXw2HUeiI'
// const osURL = 'https://api.opensea.io/api/v1/collections?asset_owner=0xc724c231Af2A7494BDe4e49ef590214117B207bF'
// // const body = document.querySelector('body');
// // const h1 = document.querySelector('body h1');
// module.exports = {

//     name: 'floor',
//     description: "floor price of owned NFTs",
//     execute(message, args){
//         fetch('https://api.opensea.io/api/v1/collections?asset_owner=0xc724c231Af2A7494BDe4e49ef590214117B207bF')
//         .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log("output: " + data)
//                 appendData(data);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
//         function appendData(data){
//             var mainContainer = document.getElementById("myData");
//             for ( var i = 0; i < data.length; i++){
//                 var div = document.createElement("div");
//                 div.innerHTML = data[i].name + ' - floor: ' + data[i].stats.floor_price;
//                 mainContainer.appendChild(div);
//             }
        
//         };
//         console.log("Output:: ",data)
//         return data;
//     }
// }

// // module.exports = (client,aliases, callback) => {
// //     if (typeof aliases === 'string'){
// //         aliases = [aliases]
// //     }

// //     client.on('message', message => {
// //         const {content} = message;
// //         aliases.forEach(alias => {
// //             const command = `${prefix}${alias}`

// //             if(content.startsWith(`${command} `) || content === command){
// //                 console.log(`Running the command ${command}`)
// //                 callback(message)
// //             }
// //         });   
// //     })
// // }