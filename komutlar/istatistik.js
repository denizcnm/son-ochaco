const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    
    .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
    .setTitle(' <a:loading:705373107296272385>  ' + client.user.username + ' İstatikleri;')

    .addField( 
      ":notepad_spiral: | Sunucular:", 
      ` ${client.guilds.cache.size}`
    ) 

    .addField(
      ":robot: | Üyeler:",
      ` ${client.guilds.cache
        .reduce((a,b) => a + b.memberCount, 0)}`
    )  

    .addField(
      "<:notfix:811853221467127839> | Kanallar:",
      ` ${client.channels.cache.size}`
    )

    .addField(
      "<:early_supporter:769250439656767569> | Bot Kurucusu:",
      ` <@760648594495242280> | <@670590846248157205> `
    ) 
    .addField(
      ":file_folder: | Sürümler:",
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
  aliases: ["status","i"]
};

exports.help = {
  name: "istatistik",
  description: "istatik",
  usage: "gç"
};