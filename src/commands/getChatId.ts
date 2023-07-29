import bot from "../bot";

bot.onText(/\/getChatId/, (msg) => {
  bot.sendMessage(msg.chat.id, msg.chat.id.toString());
});
