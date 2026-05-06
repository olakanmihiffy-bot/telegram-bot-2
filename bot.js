const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your bot.');
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'You said: ' + msg.text);
});

