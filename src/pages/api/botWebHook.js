const Telegraf = require("telegraf");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton("Menu", "http://telegraf.js.org"),
  Markup.callbackButton("Place Order", "like"),
]);

const bot = new Telegraf(process.env.BOT_TOKEN);
const chatId = -1001266042697;

export default (req, res) => {
  bot.telegram.sendMessage(chatId, "test message", Extra.markup(keyboard));
  // res.statusCode = 200;
  res.json({reqeust: "foo"});
};
