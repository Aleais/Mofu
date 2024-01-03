const { ApplicationCommandType } = require("discord.js");

module.exports = {
    data: {
        name: 'content',
        type: ApplicationCommandType.Message,
    },

    run: ({ interaction }) => {
        interaction.reply(`The message is: ${interaction.targetMessage.content}`);
    },

    options: {},
};