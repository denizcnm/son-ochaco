const Discord = require("discord.js");
exports.run = (client, message, args) => {
    
  
let help = new Discord.MessageEmbed()
.setColor('#21CAD0')
.setTimestamp()
.setTitle('Ochaco - Help')
.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)

.setDescription(`**:pushpin: | İnformation** 

To use commands at the beginning of the command **o!** Otherwise it won't work.
`)

.addFields(
  { name: '**:joy: | Fun Commands**', value: '`cuddle` `reverse` `nom` `tickle` `lick` `slots` `fish`', inline: true },
  { name: '**:robot: | Pp Commands**', value: '`avatar @tag` `serverpp`', inline: true },
  { name: '**:wrench: | Bot Commands**', value: '`• ping` `• invite` \n `• statistics` \n ', inline: true },
)




  .setTimestamp() //Alt Kısıma Zamanı Atar
  .addField(':link: | Links', '**[[Bot İnvite]](https://discord.com/oauth2/authorize?client_id=821676947557187595&scope=bot&permissions=536879104) | [[Support Server]](https://discord.gg/94mCPH68XA)**')

message.channel.send(help)
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
};
exports.help = {
  name: "help",
  usage: "musdy"
};

