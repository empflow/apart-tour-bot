import bot from "../bot";
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
      bot.sendMessage(chatId, responseTexts.mainMenu, {
        reply_markup: {
          inline_keyboard: getMainMenuButtons(),
        },
      });
    case "learnMore":
      bot.sendMessage(chatId, responseTexts.learnMore, {
        reply_markup: {
          inline_keyboard: getMainMenuButtonsExcluding("learnMore"),
        },
      });
    default:
      console.warn("No such callback query!");
  }
});
