//const http = require("http");
const axios = require("axios");
const search = "google";
const fs = require("fs");
const { bot } = require("./setting");
const { chat_id } = require("./setting");
const readline = require("readline");

const main = function () {
  (async function processLineByLine() {
    try {
      const rl = readline.createInterface({
        input: fs.createReadStream("list.txt"),
        crlfDelay: Infinity,
      });

      rl.on("line", (urls) => {
        axios.get(urls).then((res) => {
          if (res.data.search(search) == "-1")
            bot.sendMessage(chat_id, `Link not found in url ${urls}`);
        });
      });
    } catch (err) {
      console.error(err);
    }
  })();
};

module.exports = {
  main: main,
};
