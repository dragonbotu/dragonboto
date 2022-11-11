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
//set prefix | تحديد برفكس
const db = require('pro.db')//ضروري تحمل البكج 

client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'prefix') {

    let msg = message.content.split(" ").slice(1).join(" ");
    if(!msg) return await message.channel.send('Add Prefix');

    try {
      await db.set(`prefix_${message.guild.id}`,msg);
      await message.channel.send(`Done : **${msg}**`);
    } catch (err) {
      await message.channel.send(`Erorr : ${err}`);
    }
  }
});
//مثال
client.on('message',async message => {
  if(!message.guild || message.author.bot) return;
  let data = await db.get(`prefix_${message.guild.id}`);
  if(!data) return;
  if(message.content.startsWith(data + 'test')) {
    await message.channel.send('Working..');
  }
})

//https://ra3dstudio.com CopyRight Codes
///
client.login(process.env.token)
