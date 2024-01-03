const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const DEVELOPER_ID = process.env.DEVELOPER_ID;
const MAIN_GUILD_ID = process.env.MAIN_GUILD_ID;
const PREFIX = process.env.PREFIX;

try {
  module.exports = {
    // Important:
    // Client;
    // Client API Key,
    Token: TOKEN,
    // Prefix,
    Prefix: PREFIX,
    // Client ID,
    ClientID: CLIENT_ID,
    // Developer;
    DeveloperID: DEVELOPER_ID,
    DeveloperName: 'aleais#2532',
    // Guild;
    // Primary,
    Main_GuildID: MAIN_GUILD_ID,
    // Secondary,
    
    // And so on...
    // Not-Important:
    // Incomplete msg;
    _incomplete: 'Incomplete...',
    incomplete_: 'Incomplete.',
    incomplete1: 'Incomplete... 🤧',
    incomplete_1: 'Incomplete 🤧...',
    incomplete2: '🤧 Incomplete...',
    incomplete_2: '🤧Incomplete...',
    incomplete: '🤧 Incomplete... 🤧',
    incomplete: 'Incomplete...',
    incomplete: 'Incomplete...',
    incomplete: 'Incomplete...',
    incomplete: 'This Is Incomplete...',
    incomplete: 'This Is Incomplete 🤧...',
    incomplete_last: '🚧 Under-construction 🚧',
    // Error msg;
    
  };
} catch (error) {
  Console.error(`Error: \n${error}`);
}
