const TeleBot = require("telebot");
const bot = new TeleBot({
  token: "HERE_TELEGRAM_TOKEN",
});

const chat_id = "HERE_CHAT_ID";


module.exports = {
  bot: bot,
  chat_id: chat_id,
};
