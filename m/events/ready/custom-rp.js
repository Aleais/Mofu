const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.user.setActivity("At Moverse . . .", {
    type: ActivityType.Playing,
    assets: {
      largeImage: "10-20-5-9-13-22-24m.jpg",
      largeText: "Wanna Join?",
    },
  });
};
