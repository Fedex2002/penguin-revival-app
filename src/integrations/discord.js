const rpc = require('discord-rich-presence')('1356426962394022120'); // Tu Application ID

function initDiscordRichPresence() {
  rpc.updatePresence({
    state: 'Waddling',
    details: 'Penguin Revival',
    startTimestamp: Date.now(),
    largeImageKey: 'image1',
    largeImageText: 'Penguin Revival',
    instance: true,
  });

  console.log("✅ Rich Presence activo con discord-rich-presence");
}

module.exports = { initDiscordRichPresence };
