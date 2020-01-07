const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ElektroBot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:duyuru:618524374475079749> | !talep : Kullanım :!talep","Talep Açar")
.addField("<a:duyuru:618524374475079749> | !kullanıcı ara : Kullanım :!kullanıcıara","istediğiniz kullanıcıyı arar")
.addField("<a:duyuru:618524374475079749> | !sunucubilgi : Kullanım :!sunucubilgi","Sunucu Bilgisini Gösterir")
.addField("<a:duyuru:618524374475079749> | !bilgi : Kullanım :!bilgi","Botun Bilgilerini Atar")
.addField("<a:duyuru:618524374475079749> | !isimdeğiştir : Kullanım :!isimdeğiştir @kişi [yeni isim]","İsim Değitirir")
.addField("<a:duyuru:618524374475079749> | !afk : Kullanım :!afk","Sizi etiketleyen kullanıcılara AFK olduğunuzu bildirir.")
.addField("<a:duyuru:618524374475079749> | !davet : Kullanım :!davet"," benim davet linklerimi burada bulabilirsin.")
.addField("<a:duyuru:618524374475079749> | !yetkilerim : Kullanım :!yetkilerim","Yetkilerinizi Gösterir.")
.addField("<a:duyuru:618524374475079749> | !tr : Kullanım :!tr","dene ve gör .")
.addField("<a:duyuru:618524374475079749> | !kullanıcı-bilgi: Kullanım :!kullanıcı-bilgi","Kullanıcı Bilgini Gösterir.")
.addField("<a:duyuru:618524374475079749> | !davet-kur: Kullanım :!davet-kur","Sunucunun davet linkini kurar.")
.addField("<a:duyuru:618524374475079749>| !yetkilerim: Kullanım :!yetkilerim","Sunucuda sahip olduğun yetkileri gösterir.")

////////komut eklemek için .addField(":white_small_square: | komut : Kullanım : komut kullanım ","Kullanıcı")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Ne bilem kendin yaz işte ',
  usage: 'kullanıcı'
};
   