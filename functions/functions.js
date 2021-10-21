const fetch = require("node-fetch");
const osURL = "https://api.opensea.io/api/v1/collections?asset_owner=0xc724c231Af2A7494BDe4e49ef590214117B207bF"
function getChuck(){
    return fetch('http://api.icndb.com/jokes/random')
    .then(res => {
        return res.json()
    }).then(data => {
        //console.log('chuck:: ',data['value']['joke'])
        return data['value']['joke'];
    })
}
function getQuote(){
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json()
    }).then(data => {
        return data[0]["q"] + " - " + data[0]["a"]
    })
}
function getJoke(){
    return fetch('https://icanhazdadjoke.com/')
    .then(res => {
        return res.json()
    }).then(data => {
        return data['value']['joke'];
    })
}
async function getFloor(){
    return fetch(osURL)
    .then(res => {
        //console.log("result:: ",res)
        return res.json()
    }).then(data => {
        const obj = [];

        //console.log("data string:: ", JSON.parse(JSON.stringify(data[1]["name"] + " - " + data[1]["stats"]["floor_price"])));
        console.log("data length:: " + data.length)
        for(var i = 0; i < data.length; i++){
            //console.log("name list:: "+ data[i].name + " - "+ data[i].stats.floor_price);
            obj.push(data[i].name + " - "+ data[i].stats.floor_price);
        }
        console.log(obj);
        return obj;
    })    
}
module.exports = {
    getChuck,getQuote,getFloor,getJoke,
}