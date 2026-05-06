const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your bot.');
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'You said: ' + msg.text);
});

from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

TOKEN = os.getenv("BOT_TOKEN")

# This runs when user types /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Hello! Your bot is working.")

# This runs when user types /help
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Available commands:\n/start\n/help")

# Create the bot
app = ApplicationBuilder().token(TOKEN).build()

# Connect commands to functions
app.add_handler(CommandHandler("start", start))
app.add_handler(CommandHandler("help", help_command))

# Run bot
app.run_polling()