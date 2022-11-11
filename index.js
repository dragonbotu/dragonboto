//السورس الاساسي لـ دسكورد نسخة 12 | the main source of discord.js 12v
const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
//كود بنق نفس بروبوت القديم | ping code like probot
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith("ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ws.ping)} ms.\`\`\``);
 })
  }  
 });
//https://ra3dstudio.com CopyRight Codes
//كود افاتار سلاش كمند | Avatar with slash cmd
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'avatar',
  description: 'Get a member avatar',
  cooldown: 5,
  options: [
    {
      name: 'user',
      description: 'the targeted user',
      type: 'USER'
    }
  ],
  run: async function(client, interaction, args) {

    let user = interaction.guild.members.cache.get(args[0]) || interaction.member;

    let embed = new MessageEmbed()
      .setColor('BLUE')
      .setAuthor(interaction.user.tag, interaction.user.avatarURL({ dynamic: true }))
      .setImage(user.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setTitle(`${user.user.username}`)
      .setURL(user.user.displayAvatarURL({ dynamic: true, size: 1024 }))

    await interaction.followUp({ embeds: [embed] })

  }
}
//https://ra3dstudio.com CopyRight Codes
///
client.login(process.env.token)

//https://ra3dstudio.com CopyRight Codes
