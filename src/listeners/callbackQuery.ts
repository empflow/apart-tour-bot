import bot from "../bot";
import learnMore from "../commands/learnMore";
import showMainMenu from "../commands/showMainMenu";
import responseTexts from "../responseTexts";
import getMainMenuButtons from "../utils/getMainMenuButtons";
import getMainMenuButtonsExcluding from "../utils/getMainMenuButtonsExcluding";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;
  console.log(data);

  switch (data) {
    case "mainMenu":
      return showMainMenu(chatId);
    case "learnMore":
      learnMore(chatId);
    default:
      console.warn("No such callback query!");
  }
});
