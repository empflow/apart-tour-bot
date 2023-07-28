import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function learnMore(chatId: number) {
  bot.sendMessage(chatId, responseTexts.learnMore, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
