import bot from "../bot";
import respTexts from "../respTexts";
import getMainMenuButtons from "../utils/getMainMenuButtons";

export default function openMenu(chatId: number) {
  const inline_keyboard = getMainMenuButtons();

  bot.sendMessage(chatId, respTexts.menu, {
    reply_markup: { inline_keyboard },
    parse_mode: "HTML",
  });
}
