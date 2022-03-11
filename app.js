const checkURL = require("./checkURL");
const { bot } = require("./setting");
const { chat_id } = require("./setting");
const addNewLink = require("./addNewLink");
const showList = require("./showList");

bot.on(["/start", "/hello"], (msg) => {
  console.log(msg);
  bot.sendMessage(msg.from.id, `Hello ${msg.chat.username}`);
});

bot.on(["/check"], () => {
  checkURL.main();
});

bot.on(["/add-link"], (msg) => {
  let index = 0;
  msg.text = msg.text.substring(0, index) + msg.text.substring(index + 6);
  addNewLink.main(msg.text);
});

bot.on(["/list"], (msg) => {
  showList.main();
});

bot.start();
