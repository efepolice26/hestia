const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
    let pre = await db.fetch(`goldyap_${user.id}`)
  let preYazi;
  if (pre == null) preYazi = '**PREMİUM üye** Aktif Değil. :hyr: '
  if (pre == 'aktif') preYazi = '**PREMİUM üye** Aktif! :evt: '
  if (pre == 'deaktif') preYazi = '**PREMİUM üye** Aktif değil. :hyr: '

  const embed = new Discord.RichEmbed()
  .setTitle('Kullanıcı kontrol')
   .setColor('#ff0000')
  .setDescription(`1  | ${preYazi}\nKullanıcı: ${user.tag} | Kullanan: ${message.author.tag}`)
  message.channel.send(embed)
  }
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['premiumkontrol'],
  kategori: 'premium',
    permLevel: 0,
}

exports.help = {
    name: 'prekontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontrol'
}