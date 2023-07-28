import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton } from "../utils/buttons";

export default function learnMore(chatId: number) {
  bot.sendMessage(chatId, responseTexts.learnMore, {
    reply_markup: { inline_keyboard: [[backToMenuButton]] },
    parse_mode: "HTML",
  });
}
