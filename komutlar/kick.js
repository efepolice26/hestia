const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment');




exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
 
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply('Kimi sunucudan atacağımı yazar mısın?').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
   const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan atma :white_check_mark:  ')
    .addField('Atılan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Atan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  return message.channel.sendEmbed(embed);
 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed'],
  permLevel: 2,
};

exports.help = {
  name: 'kick',
  description: '',
  usage: 'S.h.a.d.o.w aittir.'
}
 