const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("Need Help?"),

  run: ({ interaction }) => {
    interaction.reply("🚧 Under-Construction... 🚧");
  },
  options: {},
};
