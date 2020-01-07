const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ElektroBot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
  .addField("<a:ayarlar:618750145936228353> | !çal: Kullanım :!çal  ","istediğiniz müziği olduğunuz kanalda çalar ")
    .addField("<a:ayarlar:618750145936228353> | !durdur: Kullanım :!durdur","müziği durduru  ")
 .addField("<a:ayarlar:618750145936228353> | !ses : Kullanım :!ses ","ses şiddetini ayarlar ")
.addField("<a:ayarlar:618750145936228353>| !geç : Kullanım :!geç ","  sıradaki şarkıya geçer ")
.addField("<a:ayarlar:618750145936228353> | !çalan : Kullanım :!çalan "," çalan şarkıyı gösterir  ")  

  

////////komut eklemek için  .addField(":white_small_square: | komut : Kullanım : komut kullanım ","Kullanıcı")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'müzik Yardım Menüsü',
  usage: 'müzik'
};