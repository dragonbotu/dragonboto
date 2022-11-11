const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
//Code Set-lang | كود تغيير لغة البوت 
const db = require('quick.db')
client.on("messageCreate", message =>{
if(message.content.startsWith(prefix + "set-lang")){
const args = message.content.split(" ").slice(1)
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({ content: "You Dont Have ADMINISTRATOR permission" })
if(args == "ar"){
db.set(`${message.guild.id}`,"ar")
const embed = new Discord.MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`Language Changed To \`AR\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send({ embeds: [embed] }) 
}else if(args == "en"){
 db.set(`${message.guild.id}`,"en") 
const embed = new Discord.MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`Language Changed To \`EN\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send({ embeds: [embed] })
}else {
  message.channel.send({ content: "Please Type Language (en, ar)" })
}
}
})
///Example Code
client.on("messageCreate", message =>{
if(message.content === prefix + "test"){
const lang = db.fetch(message.guild.id)
if(lang == "ar"){
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("اللغة عربية")
message.channel.send({ embeds: [embed] })
}else if(lang === "en") {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("The Language is English")
message.channel.send({ embeds: [embed] }) 
}else {
  const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("لغة البوت الرئيسية")
message.channel.send({ embeds: [embed] })
}

}
})   
//https://ra3dstudio.com CopyRight Codes
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
///
client.login(process.env.token)
