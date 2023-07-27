import bot from "../bot";
import responseTexts from "../responseTexts";
import getMainMenuButtonsExcluding from "../utils/getMainMenuButtonsExcluding";

export default function why(chatId: number) {
  bot.sendMessage(chatId, responseTexts.why, {
    reply_markup: { inline_keyboard: getMainMenuButtonsExcluding("why") },
  });
}
