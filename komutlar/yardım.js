const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ElekroBot`,  client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("<a:Elektro:609304012742852636>| !kullanıcı : Kullanıcı Komutları","Kullanıcı Komutları")
      .setDescription('')
      .addField("<a:Elektro:609304012742852636> | !eğlence : Eğlence Komutları","Eğlence Komutları")
      .setDescription('')
      .addField("<a:Elektro:609304012742852636>  | !yetkili : Yetkili Komutları","Yetkili Komutları")
      .setDescription('')
    .addField("<a:Elektro:609304012742852636>| !müzik : müzik Komutları","müzik Komutları")
      .setDescription('')
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
   