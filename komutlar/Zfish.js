const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("You Caught Fish, You Were Pulling the Fish..").then(message => {

    var motion = [
      "``You Picked Crap!`` :fish:",
      "``You Caught a Shark Well Paid, Sell Sell`` :D",
      "``You Caught Mackerel!`` :fish:",
      "``You Kept Haddock!`` :) :fish:",
      "``You Caught Goldfish, You Don't Think to Eat it, I Guess``",
      "``You Caught Anchovies!`` :fish:",
      "``You Caught a Perch!`` :fish:",
      "``Sorry, You Couldn't Hold Anything!`` :wastebasket:",
      "``Fish Escaped from the Fishing Line!`` :wastebasket:"
    ];
    var motion = motion[Math.floor(Math.random() * motion.length)];
    message.edit(`${motion}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fishing"],
  permLevel: 0
};

exports.help = {
  name: "fish",
  description: "You Caught Fish.",
  usage: "fish"
};