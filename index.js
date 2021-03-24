// Read config from .env file
const dotenv = require('dotenv');
dotenv.config();

const config = require("./config.json")

// Creating Bot
const Discord = require('discord.js');
const bot = new Discord.Client();

// Callbacks
bot.once('ready', () => {
	console.log('Bot is Ready');
	bot.user.setStatus("online");
	bot.user.setActivity({ type: "WATCHING", name: "Ma couille se fait bomber" })

});

bot.on('message', message => {
	console.log("Message read :", message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	if (message.content.toLowerCase().startsWith(`${config.prefix}oui`)) {
		message.channel.send("Fais pas le malin, je vais te bomber");
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
});

// -- Login

bot.login(process.env.TOKEN);

