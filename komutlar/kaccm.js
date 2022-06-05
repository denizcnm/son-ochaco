const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
    
   var espriler = [' **18CM** Gideri Var :eggplant: ' ,'**11CM ** Fena Sayılmaz :eggplant:' ,'**32CM** İyi iyi :face_with_raised_eyebrow: ' ,'**35CM** Fena Değil :woozy_face:' ,'**8CM** Aga be :cry:' ,'**65CM** O oha :scream:' ,'**5CM** Puhahahahh :joy:' ,'**31CM** Ummm :thinking:' ,'** 14CM** İdare Eder :rolling_eyes:' ,'**1CM** Dikkat Et Arkadaşların Dalga Geçmesin :face_with_hand_over_mouth:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-cm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};