const Discord = require('discord.js');

exports.run = async (client, message, args)=> {
//let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))
let muser = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!muser){
    userid = message.author.id;
  }else{
    userid = muser.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
let avatar = user.displayAvatarURL({dynamic: true, size: 2048})
if(avatar.endsWith(".gif?size=1024")) {

let embed = new Discord.MessageEmbed()
.setTitle(`${user.tag} kullanıcısının avatarı`)
.setImage(user.displayAvatarURL({ dynamic: true, size: 2048}))
.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
.setTimestamp()

.setColor("RANDOM")
message.channel.send(embed)



} else {

  let embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} kullanıcısının avatarı`)
  .setTimestamp()
  .setImage(user.displayAvatarURL({ dynamic: true, size: 2048}))
.setColor("RANDOM")
.setFooter('Ochaco', `https://cdn.discordapp.com/attachments/811943044064608307/821680856044404736/image0-2.jpg`)
message.channel.send(embed)

}
}catch{
  message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Couldn't Find User!"));
  return;
}

}

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar',"a", "av"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};