const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ElektroBot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:Elektro:609310011734360096>| !matematik : Kullanım : !matematik","matematik sorusu sorar :D")
.addField("<a:Elektro:609310011734360096> | !1vs1 : Kullanım : !1vs1 <@kullanıcı> <@kullanıcı>","Eğlence")
.addField("<a:Elektro:609310011734360096> | !ascıı : Kullanım : !ascii","Eğlence")
.addField("<a:Elektro:609310011734360096> | !emojiyazı : Kullanım : !emojiyazı Mesaj","Eğlence")
.addField("<a:Elektro:609310011734360096> | !espri : Kullanım : !espri","Eğlence")
.addField("<a:Elektro:609310011734360096> | !şifre : Kullanım : !şifre uzunluk","Eğlence")
.addField("<a:Elektro:609310011734360096> | !eküre: Kullanım : !eküre <soru>","Eğlence")
.addField("<a:Elektro:609310011734360096> | !havadurumu : Kullanım : !havadurumu <ilimiz> ","Eğlence")
.addField("<a:Elektro:609310011734360096> | !kp : Kullanım : !kp  ","Komik Paylaşım Atar")
.addField("<a:Elektro:609310011734360096> | !mesajdöndür : Kullanım : !mesajdöndür <yazı>","Yazdığınız Mesajı Döndürür")
.addField("<a:Elektro:609310011734360096> | !boks-makinesi : Kullanım : !boks-makinesi","Boks Makinesine Vurursunuz")
.addField("<a:Elektro:609310011734360096> | !korkut : Kullanım : !korkut","Korkacaksan Hiç Kullanma :D")  
.addField("<a:Elektro:609310011734360096> | !balıktut : Kullanım : !balıktut","Balık Tutarsınız Hadi Rastgele")  
.addField("<a:Elektro:609310011734360096> | !steamstore : Kullanım : !steamstore","Seçtiğiniz Oyun Hakkında Bilgi Verir.")  
.addField("<a:Elektro:609310011734360096> | !atasözü: Kullanım : !atasözü","Atasözü Söyler ")  
.addField("<a:Elektro:609310011734360096> | !tkm : Kullanım : !tkm","Taş Kağıt Makas Oynarsınız")  
.addField("<a:Elektro:609310011734360096> | !youtube : Kullanım : !youtube","Youtube de arama yapar ")  
.addField("<a:Elektro:609310011734360096>| !kartopu : Kullanım : !kartopu @kişi","Eğlence")  
.addField("<a:Elektro:609310011734360096> | !ateşet : Kullanım : !ateşet @kişi","Eğlence")  
.addField("<a:Elektro:609310011734360096> | !efkar-sv : Kullanım : !efkar-vs @kişi @kişi","Eğlence")  
.addField("<a:Elektro:609310011734360096> | !efkar-sv : Kullanım : !efkar-vs @kişi @kişi","Eğlence")  

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   