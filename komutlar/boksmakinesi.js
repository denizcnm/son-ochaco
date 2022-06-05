const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
 var boksmakinesi = ['Boks Makinesi Sonucu ・ **3000 Boks Makinesi Kırıldı.** !', 
                 'Boks Makinesi Sonucu ・ **100 Çook Yavaş Vurdun.**', 
                 'Boks Makinesi Sonucu ・ **900 Eh İşte **', 
                 'Boks Makinesi Sonucu ・ **1000 İyi**',
                 'Boks Makinesi Sonucu ・ **50 Kaplumbağamısın Bune Çooook Yavaş**', 
                 'Boks Makinesi Sonucu ・ **2000 Çok İyi**', 
                 'Boks Makinesi Sonucu ・ **700 Daha İyisini Yapabilirsin.**',
                 'Boks Makinesi Sonucu ・ **500 Yanii Daha İyisini Yapabilirsin**', 
                 'Boks Makinesi Sonucu ・ **999 | 1 Puanla Kaçırdın Be.**', 
                 'Boks Makinesi Sonucu ・ **1100 Fena Değil**', 
                 'Boks Makinesi Sonucu ・ **1200 Güzel Güzel** '
                ];
 var cevap = boksmakinesi[Math.floor(Math.random() * boksmakinesi.length)];
  
 const masdi = new Discord.MessageEmbed()
 .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
 .setColor(`RANDOM`)
 .setDescription(":boxing_glove: " + cevap)
 .setTimestamp()
 
message.channel.send(masdi)
  
  
};

exports.conf = {
   aliases: ['boks-makinası']
 };

 exports.help = {
   name: 'boksmakinesi',
   description: 'Masdi Boks Makinesi Komudu'
 }