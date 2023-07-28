import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton } from "../utils/buttons";

export default function why(chatId: number) {
  bot.sendMessage(chatId, responseTexts.why, {
    reply_markup: { inline_keyboard: [[backToMenuButton]] },
  });
}
