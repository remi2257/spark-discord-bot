module.exports = {
	name: 'bonjour',
	description: 'Un petit salut :D',
	args: false,

	execute(message, args) {
		message.channel.send('Oui bonjour');
	},
};
