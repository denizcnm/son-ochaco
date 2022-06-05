const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('**Çıkma Teklif Edeceğin Kişiyi Seçsene **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!<:muck:827877502122721281><a:fring:827877625245597706>')
    .addField('Ne Cevap Vericen Acaba Bende Merak Ettim <:question:421472583267909644><a:musdy_kelebek:820660841799352410>', `Hadi Kabul Et Bence <:hypers:827877405778640896>`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle(`Çıkma Teklif'i Ettin <:tatli:814829082613252107>`)
    .setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi-et',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};