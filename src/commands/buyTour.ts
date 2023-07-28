import bot from "../bot";
import responseTexts from "../responseTexts";
import { seePricesCbBtn } from "../utils/buttons";

export default function buyTour(chatId: number) {
  bot.sendMessage(chatId, responseTexts.buyTour, {
    reply_markup: { inline_keyboard: [[seePricesCbBtn]] },
    parse_mode: "HTML",
  });
}
