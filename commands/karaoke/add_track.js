module.exports = {
	name: 'add_track',
	description: 'Ajoute une chanson à la liste de lecture',
	args: true,
    usage: '<chanson>',

	execute(message, args) {
		message.channel.send(args[0] + " ajouté à la liste de lecture");
	},
};
