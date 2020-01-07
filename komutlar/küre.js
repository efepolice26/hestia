const Discord = require('discord.js');

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('```Elektro küreye düzgünce soru sor çarpılırsın !eküre (soru)```<a:ayarlar:618470582798778397> ')
    else message.channel.send(cevap)

};  
//ElektroBOT
const cevaplar = [
    " :zap: evet",
    " :zap: hayır",
    " :zap: belki",
    " :zap: olabilir",
    " :zap: daha sonra tekrar sor",
    " :zap: imkansız",
    " :zap: Güldürme beni",
    " :zap: HA HA HA",
    " :zap: Napcan",
    " :zap: nasıl isterseniz "
    
  
];
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['eküre','küre','elektro küre','Eküre'],
  permLevel: 0 
};
//ElektroBOT

exports.help = {
  name: 'eküre', 
  description: 'Sihirli küre sorularınızı cevaplar',
  usage: 'eküre soru'
};//ElektroBOT
