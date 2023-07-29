import bot from "../bot";
import openMenu from "../cbHandlers/openMenu";

bot.onText(/\/menu/, (msg) => {
  openMenu(msg.chat.id);
});
