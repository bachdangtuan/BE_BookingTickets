const TelegramBot = require('node-telegram-bot-api');
const token = '6035226475:AAETp_e-Oe8UFDw8GBI-hd6B_lzKyv3v_CQ';
const bot = new TelegramBot(token, {polling: true});
exports.module = {botTelegram: bot}

