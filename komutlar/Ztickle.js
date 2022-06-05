const Discord = require("discord.js");

exports.run = function(client, message, args) {

const codamey = message.mentions.users.first();

if (!codamey) return message.reply(":no_entry_sign: | Tag Someone");

const EmbedGW = new Discord.MessageEmbed()

.setDescription
(`**${message.author.username}** ` + `**tickles ${codamey}** -Haha!`)

.setImage('https://cdn.weeb.sh/images/rkPzIyQi-.gif'

)
.setTimestamp()

.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)

 return message.channel.send(EmbedGW);
 
};
exports.conf = {
    aliases: ["tickles"]   
}
exports.help = {
    name: "tickle"
};