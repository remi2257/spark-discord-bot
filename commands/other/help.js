function getFunctionsHelp() {
    const fs = require('fs');
    const commandFolders = fs.readdirSync('./commands');

    let res_string = "";

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../${folder}/${file}`);
            res_string += `${command.name} - ${command.description}\n`;
        }
    }

    return res_string;
}

module.exports = {
    name: 'help',
    description: 'Te donne un petit coup de main',
    execute(message, _args) {
        message.channel.send(getFunctionsHelp());
    },
};
