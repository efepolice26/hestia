const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Efe#0087:** ")
  .setFooter('ElektroBot  | ', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Hey Sende Gelişen ve büyüyen bir botu büyümesine katkı sağlarsan çok sevinirim",)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=611918653188866071&scope=bot&permissions=2146958847')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};