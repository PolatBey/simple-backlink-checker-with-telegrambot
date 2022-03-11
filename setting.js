const TeleBot = require("telebot");
const bot = new TeleBot({
  token: "HERE_TELEGRAM_TOKEN",
});

const chat_id = "HERE_CHAT_ID";
const search_word = "HERE_KEYWORLD";

module.exports = {
  bot: bot,
  chat_id: chat_id,
  search_word: search_word,
};
