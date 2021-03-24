module.exports = {
	name: 'add',
	aliases: ['play'],
	description: 'Ajoute une chanson à la liste de lecture',
	args: true,
    usage: '<chanson>',

	execute(message, _args) {
		message.react("👌");
	},
};
