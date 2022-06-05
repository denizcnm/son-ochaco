const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
    "`YAZI-TURA`:**TURA**",
    "`YAZI-TURA`:**YAZI**"
];

exports.run = function(client, message) {
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if (cevap === "`YAZI-TURA`:**YAZI**") {
        
         const prexyazi = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
        
        
        message.channel.send(prexyazi);
        
    } else if (cevap === "`YAZI-TURA`:**TURA**") {
        
        const prextura = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
       
        message.channel.send(prextura);
        
    }
        

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};