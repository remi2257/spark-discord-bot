module.exports = {
	name: 'next',
	aliases: ['skip'],
	description: 'Stop la chanson actuellement joué et continue la liste de lecture',
	args: false,

	execute(message, _args) {
		message.react("👌");
	},
};
