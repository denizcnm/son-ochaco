const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
    

    
message.channel.send("Ata-Sözü Aranıyor...").then(message => {

    

    var Musdy = [
 
      "Acele işe şeytan karışır.",
      "At ile avrat yiğidin ikbalindendir.",
      "Yağmurlu gün tavuk su içmez.",
      "Yardımcının yardımcısı olur.",
      "Tasa doyurur, acı acıktırır.",
      "Mum dine ışık vermez",
      "Geniş günün de dar gezen, dar günün de geniş gezer.",
      "Dost kazan dost; düşman anadan da doğar.",
      "Dağ dumansız insan hatasız olmaz.",
      "Bir bütün bir yarımdan iyidir.",
      "Bahar çiçeğiyle güzeldir.",
      "Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur."
    ];
    

    var Musdy = Musdy[Math.floor(Math.random() * Musdy.length)];
    
    message.edit(`${Musdy}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atasözü'],
  permLevel: 0
};

exports.help = {
  name: "atasözü"
};