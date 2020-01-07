const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',//Burayı değiştirmeyin daha iyi olur sizin için
    token: "NjExOTE4NjUzMTg4ODY2MDcx.XVa73w.kfVjwH58L0WuJzioyXrwsHDa1GI"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);