const Discord = require("discord.js");
exports.run = (client, message, args) => {
    
  
let yardım = new Discord.MessageEmbed()
.setColor('#21CAD0')
.setTimestamp()
.setTitle('Ochaco - Yardım')
.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)

.setDescription(`**:pushpin: | Bilgilendirme** 

Komutları kullanmak için her komutun başına **o!** yazmanız gerekir aksi takdirde çalışmaz.
"tersyazı" Komutu everyone ve link atma bug'undan dolayı kaldırılmıştır.

`)

.addFields(
  { name: '**:joy: | Eğlence Komutları**', value: ' `8ball` `balıktut` `sarıl` `ye` `atasözü` `kaçcm` `yala` `gıdıkla` `yazıtura` `slot` `çekiç` `kartopu` ', inline: true },
  { name: '**:robot: | Kullanıcı Komutları**', value: '`avatar @etiket` `sunucupp` \n `id @kullanıcı`', inline: true },
  { name: '**:wrench: | Bot Komutları**', value: '`• ping` `• davet` \n `• istatistik` ', inline: true },
)




  .setTimestamp() //Alt Kısıma Zamanı Atar
  .addField(':link: | Linkler', '**[[Bot Davet]](https://discord.com/oauth2/authorize?client_id=821676947557187595&scope=bot&permissions=536879104) | [[Destek Sunucum]](https://discord.gg/94mCPH68XA)**')

message.channel.send(yardım)
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Yardım'],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  usage: "musdy"
};

