const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => { // Sakın silme kod bozulur

    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} - Komut sorgulama `, client.user.avatarURL)
        
    
        .setDescription(`Şu an anlık olarak **${client.commands.size}** komut var`)

 
      .setColor(`#ff0000`)
      .setThumbnail(client.user.displayAvatarURL)
    return message.channel.sendEmbed(embed).then(msg => msg.delete(15000));

  
 

  
};

exports.conf = { 
  enabled: true, // ne blm
  guildOnly: false, // ne blm
  aliases: ['e-ksayısı'], // Alternatif kısmıdır. kodu çoklu kullanabilirsiniz.
  permLevel: 0, // Permlevel için Permler.md bakınız. 
};

exports.help = {
  name: 'ekomutsayısı', // Komut adını girdiğimiz yer
  description: 'DARKTEAM.JS LAST TARAFINDAN YAPILMIŞTIR.', // Komut Açıklaması
  usage: 'komutsayısı yazınca kaç komut var gösterir.' // Kullanım
};