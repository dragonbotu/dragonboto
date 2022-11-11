//السورس الاساسي لـ دسكورد نسخة 12 | the main source of discord.js 12v
const Discord = require('discord.js');
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
//////////////////////////////////////
//كود نكت بـ سلاش كوماند | Code joke with slash command 
//torky
const joke = [
  "في شيطاان نذل عزم اخوياه الشياطين على العشاء ويوم جو حبسهم في غرفه وشغل عليهم القراااان ",
  "في محشش جالس عند التلفزيون ويضحك قالوا له : وش فيك؟؟ قال يلعن ام الحركة اذا غمضت عيني صار راديو  ",
  "واحد مسطول , صاحبه طاح في البير راح يستناه عند الحنفية هههه ",
        "غبية قتلت زوجها سألها الضابط ليش ؟ قالت خاين .. له كم شهر توصله رسالة من وحده اسمها زين (شركة جوال) تشكره على سداد فواتيرها... ",
        "'محشش جاب ولد , سألوه : وش تبي تسميه ؟ قال : بسميه بابا على أسم أبوي ",
        "حكمة محشش ” ‏إذا شفت الذبان يدور فوق راسك أعرف ان تفكيرك زباله. ",
        "مره واحد راح يفحص عند دكتور سوداني قال له الدكتور : عندك فيروز في الرئه قال : حلو فتش يمكن تلقى نانسي في الكبد  ",
        "نملة تزوجت ذبابة ليش؟ كانت تتمنى تتزوج طيار. ",
  "سعودي يسأل بنت مصرية وش إسمك ؟ قالت : هنادي أحمد , قال : ناديه يعني خايف منو . ",
  "محشش اشتغل حارس مسجد بعد يومين فصلوه ؟!؟ |  | كل ما يأذن يسكر باب المسجد و يحط ورقه مكتوب عليها  مغلق للصلاة  ",
  "واحد كاتب اتمنى أن أتعلم لغة الحيوانات جات وحدة وردت عليه وقالت: هل هذا طموحك ؟ رد عليها: نعم عشان اتفاهم مع امثالك :) شق جبهتها ",
  " فيه سلحفا دخلت مطعم وطلبت رز، قام الحارس شالها رماها برا رجعتله بعد شهر وقالت له في شي اسمه أسلوب. "
];
client.on("interactionCreate", async (interaction) => {
     if (!interaction.isCommand()) return;//torky
     if (interaction.commandName === "jokes") {//torky
       const randomjokesGenerator = joke[Math.floor(Math.random() * joke.length)];//torky
     let embed = new Discord.MessageEmbed()//torky
      .setColor("BLUE")//torky

       //torky
      .setThumbnail(interaction.guild.iconURL())
      //torky
       .setDescription(**${randomjokesGenerator}**) //torky
  //torky
             interaction.reply({ embeds: [embed] , ephemeral: false})
     }//torky
    })//torky
//https://ra3dstudio.com CopyRight Codes
///
client.login(process.env.token)

//https://ra3dstudio.com CopyRight Codes
