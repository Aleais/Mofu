// Imports
const { Token/*, ClientID*/, Main_GuildID, DeveloperID } = require('./m/locker.js');
const { Client, GatewayIntentBits } = require('discord.js');
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

/*
OLD Code:

// IMPORTS:
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { REST } = require("@discordjs/rest");
const { Token, ClientID, Prefix } = require("./config.js");

const help_command_1 = "help";
const help_command_1_description = "Helps the lost.";
// const help_command_2 = "help <commands>"
// const help_command_2_description = "Helps the lost at specific command."
const command_1 = "ping";
const command_1_description = "Bot replies with ping!.";
const under_construction = "🚧 Under-Construction 🚧";

// CLIENT:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// EVENTS:
// On Ready;
client.on("ready", () => {
  console.log(`✅ ${client.user.tag} is Now Online!`);
  client.user.setPresence({
    Activities: [{ name: "At Moverse", type: ActivityType.Playing }],
    status: "online",
  });
});

// Commands;
// Name & Description of Slash Commands,
const commands = [
  // Help command,
  {
    name: help_command_1,
    description: help_command_1_description,
  },
  // Ping command,
  {
    name: command_1,
    description: command_1_description,
  },
];

// Rest:
const rest = new REST({ version: "10" }).setToken(Token);

// Deploying commands,
(async () => {
  try {
    // Starting msg,
    console.log("⏳ Started refreshing application (/) commands.");
    // Refresh commands,
    await rest.put(Routes.applicationCommands(ClientID), { body: commands });
    // Success msg,
    console.log("🎉✅ Successfully reloaded application (/) commands.");
    // Error msg,
  } catch (error) {
    console.error(`❌ Error: \n${error}`);
  }
})();

// Functions Of Slash Commands;
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  // Ping Command,
  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
  // Help Command,
  if (interaction.commandName === "help") {
    await interaction.reply(under_construction);
  }
});

// On Message;
client.on("messageCreate", (msg) => {
  // help command,
  if (msg.content === `${Prefix}help`) {
    msg.reply(
      `**This is help command!**\n\n**Prefix:** ${Prefix}\n\n**Commands:**\n\n\`\`${help_command_1}\`\` Helps the lost.\n\`\`${command_1}\`\` Bot replies with Pong!\n`,
    );
  }
  // ping command,
  if (msg.content === `${Prefix}ping`) {
    msg.reply("Pong!");
  }
});

// On Shutdown;
client.on("shutDown", () => {
  console.log(`❌ ${client.user.tag} is Now Offline!`);
});

// Ready?...
client.login(Token)
*/
