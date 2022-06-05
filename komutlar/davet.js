const Discord = require('discord.js')
exports.run = (client, message, args) => {

const musdy = new Discord.MessageEmbed()
.setColor("RANDOM")



.addField("Ochaco",` [**[Davet Et]**](https://discord.com/oauth2/authorize?client_id=821676947557187595&scope=bot&permissions=536879104) `)
    
.addField("Destek Sunucum'a Katıl",` [**[Destek Sunucum]**](https://discord.gg/94mCPH68XA)`)

.setTimestamp()

.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)

message.channel.send(musdy)
    
    
    }
    exports.conf = {
        aliases: ["davett","davets"],
        permLevel: 0
          
        };
          
        exports.help = {
        name: 'davet'
        };