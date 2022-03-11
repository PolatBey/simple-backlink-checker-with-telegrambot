const fs = require("fs");
const { readFileSync } = require("fs");
const { bot } = require("./setting");
const { chat_id } = require("./setting");

main = (NewURL) => {
  const addnew = fs.createWriteStream("list.txt", { flags: "a" });
  addnew.write("\n" + NewURL);
  addnew.end();

  fs.readFile("list.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    bot.sendMessage(chat_id, `Link Eklendi \n Eklenen Link: ${NewURL}`);
  });
};

module.exports = {
  main: main,
};
