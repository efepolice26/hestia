const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Atılacak Kişiyi Etiketleyiniz.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Atılma <:tikevet2:599979222412427275> ')
    .addField('Atılan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Atan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Atılma Sebebi:', reason);
  return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick', 'at', 'tekme', 'kck', 'k'],
  permLevel: 2
};

exports.help = {
  name: 'tekme',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'tekme [kullanıcı] [sebep]'
};