const Discord = require("discord.js");
exports.run = (client, message, args) => {

    let oyver = new Discord.MessageEmbed()
.setColor('#21CAD0')
.addField("Teşekkürler Oy Vermek İçin :arrow_down: ", ` [[**Oy Ver**]](https://discord.gg/94mCPH68XA)`)

.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
.setTimestamp()



message.channel.send(oyver)
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['oyver'],
  permLevel: 0
};
exports.help = {
  name: "oyver",
  usage: "musdy"
};
