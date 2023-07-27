import bot from "../bot";
import responseTexts from "../responseTexts";
import getMainMenuButtonsExcluding from "../utils/getMainMenuButtonsExcluding";

export default function learnMore(chatId: number) {
  bot.sendMessage(chatId, responseTexts.learnMore, {
    reply_markup: { inline_keyboard: getMainMenuButtonsExcluding("learnMore") },
  });
}
