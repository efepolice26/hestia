const Discord = require('discord.js');
exports.run = async function(client, message, args) {
   
 
 
    const yakyak = new Discord.RichEmbed()
    .setColor("0x808080")
    .setDescription(`${message.author} Aga beee Yak Yak!🚬 🚬 **(Sigara içmeyi önermez)**`)
    .setImage('https://cf.kizlarsoruyor.com/a64464/c6bbbebe-35a1-41eb-bfd0-eaba4e952086.gif')
    .setFooter("Yak Yak 🚬!", client.user.avatarURL)
    message.channel.send(yakyak);

};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['aga be','agabe','yakyak','sigarayak','yakknk','rikkayaz'],
  permLevel: 0
};

exports.help = {
  name: 'agabe',
  description: 'yak yak!',
  usage: 'aga be!'
};