const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
   
  const masdi = new Discord.MessageEmbed()
  .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle('Here Picture of the Server')
  .setImage(message.guild.iconURL())
  message.channel.send(masdi)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["serverpp"],
}

exports.help = {
  name: 'serverpp',
};