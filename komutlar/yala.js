const Discord = require("discord.js");

exports.run = function(client, message, args) {

const codamey = message.mentions.users.first();

if (!codamey) return message.reply("Yalamak İstediğin Kişiyi Etiketle");

const EmbedGW = new Discord.MessageEmbed()

.setDescription
(`**${message.author.username}** ` + `** ${codamey}'yı yaladı** -çok güzel`)

.setImage('https://cdn.weeb.sh/images/Hkknfs2Ab.gif'

)
.setTimestamp()

.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)

 return message.channel.send(EmbedGW);
 
};
exports.conf = {
    aliases: ["yala"]   
}
exports.help = {
    name: "yala"
};