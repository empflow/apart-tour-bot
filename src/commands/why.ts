import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function why(chatId: number) {
  bot.sendMessage(chatId, responseTexts.why, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
