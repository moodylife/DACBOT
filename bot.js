const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame('DacBot | *dc ','https://www.twitch.tv/peery13');
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', fras => {
var prefix = "*";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels يحذف جميع شاتات
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles يحذف جميع رتب
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});//Toxis Codes 
omar.reply("`تم حذف جميع الرتب بنجاح`")
}//Toxis Codes
}); //Toxis Codes
client.on("ready", async  => {
  setInterval(function(){
  client.channels.find('id', '531593819674640404').setName("W");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("We");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Wel");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welc");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welco");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcom");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome T");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To T");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Tox");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxi");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic C");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic Co");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic Cod");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic Code");//Toxic Codes
  client.channels.find('id', '531593819674640404').setName("Welcome To Toxic Codes");//Toxic Codes
    }, 4000);
  });
