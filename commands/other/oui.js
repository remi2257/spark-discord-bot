module.exports = {
	name: 'oui',
    aliases: ['ouii', 'ouiii', 'ouiiii'],
	description: 'Je dis oui',
	args: false,

	execute(message, args) {
		message.channel.send('Ouiiii');
	},
};
