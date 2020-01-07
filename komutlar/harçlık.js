
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args, params) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
        .setColor(`Random`)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('**Bu Komutu Özel Mesajlarda Kullanamazsın.!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if( message.channel.type !== 'dm');
    let mesaj = args.slice(0).join('');
    if (mesaj.length < 1) return message.reply('**Harçlık Vereceğin Kişiyi Etiketle **');
    const embed = new Discord.RichEmbed()
    .setAuthor('100 Tl Harçlık wooooooooow')
     .setColor(`Random`)
    .setDescription(`** ${mesaj} ` + message.author.username + '  Sana 100 TL Harçlık Verdi  **')
    
    .setImage(`https://www.faturalihatlarakredi.com/wp-content/uploads/2017/04/acil-para-m%C3%BCjdesi.gif`) 
  return message.channel.sendEmbed(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'harçlık-ver',
};