const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
   
  const masdi = new Discord.MessageEmbed()
  .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
  .setColor("RANDOM")
  .setTitle('Işte Sunucunun Resmi')
  .setImage(message.guild.iconURL())
  .setTimestamp()
  message.channel.send(masdi)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}

exports.help = {
  name: 'sunucupp',
};