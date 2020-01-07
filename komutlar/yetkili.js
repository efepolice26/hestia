const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ElektroBot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
  .addField("<a:ayarlar:609133897942433934> | !egüvenlik: Kullanım :!egüvenlik #kanal ","sunucuya katılanların güvenli olup olmadığını gösterir ")
    .addField("<a:ayarlar:609133897942433934> | !reklam-taraması: Kullanım :!reklam-taraması","reklam taraması yapar   ")
  .addField("<a:ayarlar:609133897942433934> | !otorol : Kullanım : !otorol @rol #kanal ","otorol özelliğini açar ")
.addField("<a:ayarlar:609133897942433934> | !tekme : Kullanım :!tekme @kişi","Etiketlediğiniz Kişiyi Sunucudan Atar")
.addField("<a:ayarlar:609133897942433934>| !sustur : Kullanım :!sustur <kullanıcı> <süre> <sebep>","Etiketlediğiniz Kişiyi susturur")
.addField("<a:ayarlar:609133897942433934> | !ban : Kullanım :!ban @kişi","Etiketlediğiniz Kişiyi Banlarsınız")  
.addField("<a:ayarlar:609133897942433934> | !duyuru : Kullanım :!duyuru [Duyurmak İstediğiniz şey]","Duyuru Yaparsınız")
.addField("<a:ayarlar:609133897942433934> | !temizle: Kullanım :! Belirtilen Miktarda Mesajı Silir.  ")
.addField("<a:ayarlar:609133897942433934> | !hr-ver : Kullanım :!herkese-rol-ver","Herkese Rol verir")
.addField("<a:ayarlar:609133897942433934> | !küfür-engelle : Kullanım :!küfür-engelle[aç][kapa]","Küfür engellemeyi açar veya kapatır")
.addField("<a:ayarlar:609133897942433934> | !link-engelle : Kullnım :!Link-engelle[aç][kapa]","Link Engellemeyi açar veya kapatır")
.addField("<a:ayarlar:609133897942433934> | !oylama : Kullanım :!oylama <oylamak istediginiz şey>","oylama Yaparsınız")
.addField("<a:ayarlar:609133897942433934> | !sayaç : Kullanım :!sayaç-ayarla [sayı/sıfırla] [kanal] ","Sunucunuza Sayaç Ayarlar")
.addField("<a:ayarlar:609133897942433934> | !çekiliş : Kullanım :!çekiliş yazıp bekleyin sonra [kanal yazıp bekleyin sonra  [zaman ] yazın "," Çekiliş yapar ")
.addField("<a:ayarlar:609133897942433934>| !üyedurumu : Kullanım :!üyedurumu "," Üye durumunu gösterir ")
.addField("<a:ayarlar:609133897942433934> | !hr-al : Kullanım :!herkesten-rol-al ","Herkesten-rol-alır ")
.addField("<a:ayarlar:609133897942433934>| !oy-kick : Kullanım :!oy-kick @kişi","Oyla Kick Atar")
.addField("<a:ayarlar:609133897942433934> | !slow-mode : Kullanım :!slow-mode zaman","slowmoden açar")
.addField("<a:ayarlar:609133897942433934>| !banlananlar : Kullanım :!banlananlar","banlanan kişileri gösterir ")
.addField("<a:ayarlar:609133897942433934> | !rol-ver : Kullanım :!rol-ver","istediğiniz kişiye rol verir ")
.addField("<a:ayarlar:609133897942433934> | !kilit: Kullanım :!kilit [zaman]","kanalı kitler ")
.addField("<a:ayarlar:609133897942433934> | !everyone-engelle: Kullanım :!everyone-engelle  [aç/kapat]","everyone engellemeyi açar veya kapatır ")
.addField("<a:ayarlar:609133897942433934> | !temizle-üye: Kullanım :!temizle-üye @kişi [mesaj sayısı] "," Belirtilen kişinin belirtilen miktarda mesajını siler. ")

  
  

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
  name: 'yetkili',
  description: 'Yetkili Yardım Menüsü',
  usage: 'yetkili'
};