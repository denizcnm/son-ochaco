const discord = require('discord.js')
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply('Right Use (PREFİX) reverse = hello')
    
  }
  
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: [ 'r' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'reverse',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'reverse yazı',
};