const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('MTA0MDUzNDY2ODQxNzY5NTc1NQ.G43miR.L65iGDqUI5gB185ofODq16sC8SF9hFaIeVhc78');
