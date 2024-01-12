// Imports
const { Token,/* ClientID,*/ Main_GuildID, DeveloperID } = require('./m/locker.js');
const { Client, GatewayIntentBits, /*ActivityType*/ } = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
 
new CommandKit({
    client,
    commandsPath: path.join(__dirname, '/m/commands'),
    eventsPath: path.join(__dirname, '/m/events'),
    // validationsPath: path.join(__dirname, '/m/validations'),
    devGuildIds: [Main_GuildID,],
    devUserIds: [DeveloperID,],
    // devRoleIds: ['DEV_ROLE_ID_1', 'DEV_ROLE_ID_2'],
    skipBuiltInValidations: false,
    bulkRegister: true,
});

client.login(Token);