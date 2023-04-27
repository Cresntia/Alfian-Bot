require('dotenv').config();
const { REST } = require('discord.js')
const { Routes } = require('discord-api-types/v9');

const commands = [
    {
        name: 'hey',
        description: 'reply with hey!',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('registering slash commands...');
       
        await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('slash commands were registered successfully!');
     } catch (error){
        console.log(`there was an error: ${error}`);
    }
})();