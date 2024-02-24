const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("6905846244:AAFlunIc2p38YAhCXhHWUNfKpIDMtbvKOek");

module.exports = { bot };

bot.launch();
