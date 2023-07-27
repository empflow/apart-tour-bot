import bot from "../bot";
import responseTexts from "../responseTexts";
import getMainMenuButtonsExcluding from "../utils/getMainMenuButtonsExcluding";

export default function examples(chatId: number) {
  bot.sendMessage(chatId, responseTexts.examples, {
    reply_markup: { inline_keyboard: getMainMenuButtonsExcluding("examples") },
  });
}
