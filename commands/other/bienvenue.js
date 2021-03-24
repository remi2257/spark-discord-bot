module.exports = {
	name: 'bienvenue',
	description: 'Souhaite la bienvenue à un nouvelle arrivant',

	execute(message, args) {
		message.channel.send('Bienvenue sur le serveur grosse folle');
	},
};
