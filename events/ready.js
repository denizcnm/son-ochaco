const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("DD-MM-YYYY HH:mm:ss")}]  Bot Hazır Komutlar Yüklendi`
  );
  console.log(`[${client.user.username}] |  Ben Hazırım Çalışıyorum Bilgine.
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
    
  client.user.setStatus("dnd");
  client.user.setActivity(`o!yardım/help  | v1.2 | ` + client.guilds.cache.size + ` server`, { type: "WATCHING" }); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
 

};
