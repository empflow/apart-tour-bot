import bot from "../bot";
import mainMenu from "../cbHandlers/mainMenu";
import respTexts from "../respTexts";

bot.onText(/\/menu/, (msg) => {
  mainMenu(msg.chat.id);
});
