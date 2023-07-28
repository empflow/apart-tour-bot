import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function seePrices(chatId: number) {
  bot.sendMessage(chatId, responseTexts.seePrices, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
