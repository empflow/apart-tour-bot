import bot from "../bot";
import mainMenu from "../cbHandlers/mainMenu";

bot.onText(/\/menu/, (msg) => {
  mainMenu(msg.chat.id);
});
