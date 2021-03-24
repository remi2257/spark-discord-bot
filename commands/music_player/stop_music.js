module.exports = {
	name: 'stop',
	description: 'Stop la chanson actuellement joué et arrête la liste de lecture',
	args: false,

	execute(message, args) {
		message.react("⏹️");
	},
};
