// Read config from .env file
const dotenv = require('dotenv');
dotenv.config();

const {prefix} = require("./config.json")

// Creating Bot
const Discord = require('discord.js');
const client = new Discord.Client();

// Commands handler
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// Callbacks
client.once('ready', () => {
	console.log('Bot is Ready');
	client.user.setStatus("online");
	client.user.setActivity({ type: "WATCHING", name: "Ma couille se faire bomber" })

});

client.on('message', message => {
	console.log("Message read :", message.content);
	// Check that the message is intended for the robot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// Petit coup de pression
	if (message.content.toLowerCase().startsWith(`oui`)) {
		message.channel.send("Fais pas le malin, je vais te bomber");
	}

	// Parse arguments
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Get command from command list
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));;
	if (!command) {
		console.log("Unknow command", commandName)
		return;
	}

	// Check if command should have args and haven't
	if (command.args && !args.length) {
		return message.channel.send(`Ouiiii, tu m'as bombé ${message.author}, envoie les paramètres ${command.usage}`);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Erreur d\'exécution de la commande');
	}
});

// -- Login

client.login(process.env.TOKEN);

