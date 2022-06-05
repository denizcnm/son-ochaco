const discord = require('discord.js')
exports.run = function(client, message, args,params) {
  
  if (args.length < 1) {
    return message.reply('Doğru Kullanım (PREFİX) tersyazı = merhaba')
    .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
  }
  
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: [ 'kalktıters' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'kalktıters',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'kalktıters',
};