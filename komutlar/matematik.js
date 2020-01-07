const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = async (client, message, args) => {

  this.matematiktopcik = 0
  const topcikbelli = Math.floor(Math.random() * (3 - 1)) + 1
  const sides = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	const taken = [];
  if(topcikbelli === 1) this.matematiktopcik = 1
  if(topcikbelli === 2) this.matematiktopcik = 2

  if(this.matematiktopcik === 1) {
    const rakam1 = Math.random() * (100 - 1).toFixed()
    const rakam2 = Math.random() * (100 - 1).toFixed()
    const sonuç = rakam1 + rakam2
    const fixedlisonuç = sonuç.toFixed()
    let choice;
    await message.react('👌')
    await message.channel.send(stripIndents`
					${message.author}, :nerd: Cevaplamak için 15 saniyen var !
					\`\`\`
					${rakam1.toFixed()} + ${rakam2.toFixed()}
					\`\`\`
				`);
           let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) return message.channel.send(`${message.author}, :shrug: Üzgünüm! Zaman doldu! Cevap: ${fixedlisonuç} :shrug:`)
                const choice = response.first().content
                if(isNaN(choice)) {
                  return message.channel.send(`${message.author}, :shrug: Doğru bir cevap vermediğiniz için komudu iptal ettim.`)
                }
                if (choice !== fixedlisonuç) return message.channel.send(`${message.author}, :shrug: Hatalı... Cevap: ${fixedlisonuç} :shrug:`)
                if (choice !== fixedlisonuç) {
                }
                if (choice == fixedlisonuç) uwu = true
                }
                if (uwu) {
                  await message.channel.send(`${message.author}, :tada: Doğru! Cevap: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
            message.channel.send('Bir hata oluştu')
        }
    } else return console.log('Bir hata oluştu')

    
  } else {
    if(this.matematiktopcik === 2) {
      const rakam1 = Math.random() * (100 - 1).toFixed()
    const rakam2 = Math.random() * (100 - 1).toFixed()
    const sonuç = rakam1 - rakam2
    const fixedlisonuç = sonuç.toFixed()
    let choice;
    await message.react('👌')
    await message.channel.send(stripIndents`
					${message.author}, :nerd: Cevaplamak için 15 saniyen var !
					\`\`\`
					${rakam1.toFixed()} - ${rakam2.toFixed()}
					\`\`\`
				`);
           let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) return message.channel.send(`${message.author}, :shrug: Üzgünüm! Zaman doldu! Cevap: ${fixedlisonuç} :shrug:`)
                const choice = response.first().content
                if(isNaN(choice)) {
                  return message.channel.send(`${message.author}, :shrug: Doğru bir cevap vermediğiniz için komudu iptal ettim.`)
                }
                if (choice !== fixedlisonuç) return message.channel.send(`${message.author}, :shrug: Hatalı... Cevap: ${fixedlisonuç} :shrug:`)
                if (choice !== fixedlisonuç) {
                }
                if (choice == fixedlisonuç) uwu = true
                }
                if (uwu) {
                  await message.channel.send(`${message.author}, :tada: Doğru! Cevap: \`${fixedlisonuç}\` :tada:`)
                try {
            } catch(e) {
            message.channel.send('Bir hata oluştu')
        }
    } else return console.log('Bir hata oluştu')
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mat"],
  permLevel: 0
};

exports.help = {
    name: 'matematik',
  description: 'Rastgele matematik hesabı atar.',
  usage: 'matematik'
};