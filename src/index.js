require('dotenv').config();
const { Client,IntentsBitField} = require('discord.js');

const client = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready to play`)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    
    if (message.content === 'hey') {
        message.reply('hey !');
    }

    if (message.content === 'ping'){
        message.reply('pong')
    }
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return; 

    if (interaction.commandName === 'hey'); {
        interaction.reply('hey');
    }
})

client.login(process.env.TOKEN);