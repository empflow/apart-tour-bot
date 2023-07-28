import bot from "../bot";
import responseTexts from "../responseTexts";
import getMainMenuButtons from "../utils/getMainMenuButtons";

export default function mainMenu(chatId: number) {
  const inline_keyboard = getMainMenuButtons();

  bot.sendMessage(chatId, responseTexts.mainMenu, {
    reply_markup: { inline_keyboard },
  });
}
