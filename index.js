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
static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Playing Solo";
    discordPresence.details = "Competitive";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.endTimestamp = 1507665886;
    discordPresence.largeImageText = "Numbani";
    discordPresence.smallImageText = "Rogue - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 1;
    discordPresence.partyMax = 5;
    discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
    Discord_UpdatePresence(&discordPresence);
}
///
client.login(process.env.token)
