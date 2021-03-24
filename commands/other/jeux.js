jeux = [
    {
        "name": "Gartic Phone",
        "description": "Un téléphone arabe bien fun",
        "url": "https://garticphone.com/",
    },
    {
        "name": "Skribbl",
        "description": "Un pictionnary en ligne",
        "url": "https://skribbl.io/",
    },

]

module.exports = {
    name: 'jeux',
    aliases: ['jeu', 'game', 'games'],
    description: 'Affiche une liste de jeu connu !',
    args: false,

    execute(message, _args) {
        message.react("🎲");
        let list_string_res = jeux.map(({ name, description, url }) => `${name} - ${url} - ${description}`);
        
        message.channel.send(list_string_res.join("\n"));
    },
};
