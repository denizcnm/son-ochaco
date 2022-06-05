const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    
    .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
    .setTitle(' :chart_with_upwards_trend: ' + client.user.username + ' Statistics;')

    .addField( 
      ":notepad_spiral: | Server's:", 
      ` ${client.guilds.cache.size}`
    ) 

    .addField(
      ":robot: | Member's:",
      ` ${client.guilds.cache
        .reduce((a,b) => a + b.memberCount, 0)}`
    )  

    .addField(
      ":notepad_spiral: | Channels:",
      ` ${client.channels.cache.size}`
    )

    .addField(
      ":robot: | Bot Developer:",
      ` <@760648594495242280>  `
    ) 
    .addField(
      ":file_folder: | Version's:",
      ` Discord.js version: **v${Discord.version}**`
    ) 
    
    
    .setTimestamp()
    .setColor("#ff0000");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["status","s"]
};

exports.help = {
  name: "statistics",
  description: "istatik",
  usage: "gç"
};