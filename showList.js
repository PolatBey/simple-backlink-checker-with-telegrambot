const readline = require("readline");
const fs = require("fs");
const { bot } = require("./setting");
const { chat_id } = require("./setting");

main = function () {
  let rl = readline.createInterface({
    input: fs.createReadStream("list.txt"),
  });

  let line_no = 0;

  rl.on("line", function (line) {
    line_no++;
  });

  rl.on("close", function (line) {
    bot.sendMessage(chat_id, `Total Link Count : ${line_no}`);
  });

  bot.sendDocument(chat_id, "list.txt");
};

module.exports = {
  main: main,
};
