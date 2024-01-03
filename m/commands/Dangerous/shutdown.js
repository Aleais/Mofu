const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shutdown")
    .setDescription("Bot Will Shutdown!"),

  run: ({ interaction }) => {
    interaction.reply("Bot Is Shuting Down...");
  },
  options: {
    devOnly: true,
  },
};
