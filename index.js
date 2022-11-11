//السورس الاساسي لـ دسكورد نسخة 12 | the main source of discord.js 12v
const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
//كود بنق نفس بروبوت القديم | ping code like probot
client.on('messageCreate' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith("ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ws.ping)} ms.\`\`\``);
 })
  }  
 });
//https://ra3dstudio.com CopyRight Codes
//كود بنج سلاش كوماند | Code Ping with Slash Commands v13 js
client.on("interactionCreate", async (interaction) => {
     if (!interaction.isCommand()) return;
     if (interaction.commandName === "ping") {
       let tk = Date.now() - interaction.createdTimestamp
     let embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setThumbnail(interaction.guild.iconURL())
      .setDescription(`
**🏓pong!:**
:stopwatch: WS: ${client.ws.ping}ms
:hourglass: Time : ${tk}ms
`) 
  
             interaction.reply({ embeds: [embed] , ephemeral: false})
     }
    })
//https://ra3dstudio.com CopyRight Codes
//Anti Bad words with Timeout Code | كود منع سب مع تايم اوت
client.on("messageCreate" , async message => {
 let words = ["test","discord.gg/"]
 for (let s = 0;s < words.length;s++) {
   if(message.content.includes(words[s])) {
   if(!message.member.permissions.has("ADMINISTRATOR")) {  
   let member = message.member;
   let embed = new Discord.MessageEmbed()
   .setAuthor(message.author.username , message.author.displayAvatarURL())
   .setTitle("**مش قلنا بلاش سب طب خد بقا تايم اوت😑**")
   .setDescription(`**You are muted in \`${message.guild.name}\` server for a 1 hour**\n**For sharing a bad words or links in the chat !**\n**Your message : \`${message.content}\`**`)
   .setThumbnail(message.guild.iconURL())
   .setFooter(message.guild.name , message.guild.iconURL())
   message.delete()
   await message.channel.send(`${message.member} **It's Not allowed to share bad words or links !**`)
   await member.timeout(3600000 , "idk")
   await message.member.send({embeds:[embed]})
   }}
 }
});
//https://ra3dstudio.com CopyRight Codes
///
client.login(process.env.token)
