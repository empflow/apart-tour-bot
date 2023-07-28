import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton } from "../utils/buttons";

export default function examples(chatId: number) {
  bot.sendMessage(chatId, responseTexts.examples, {
    reply_markup: { inline_keyboard: [[backToMenuButton]] },
  });
}
