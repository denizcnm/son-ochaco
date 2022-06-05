const Discord = require("discord.js");
exports.run = (client, message, args) => {

  const { MessageEmbed } = require('discord.js')
  const embed = new Discord.MessageEmbed()
  .setTimestamp()
        .addField('Botun Pingi:', 'Pingim ' + client.ws.ping + ' ms')
        .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
        message.channel.send('**Ping: **' + client.ws.ping + ' ms')
        
    }
    
    
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['p'],
        permLevel: 0
      };
      exports.help = {
        name: "ping",
        usage: "musdy"
      };

