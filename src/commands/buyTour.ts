import bot from "../bot";
import responseTexts from "../responseTexts";
import { seePricesButton } from "../utils/buttons";

export default function buyTour(chatId: number) {
  bot.sendMessage(chatId, responseTexts.buyTour, {
    reply_markup: { inline_keyboard: [[seePricesButton]] },
    parse_mode: "HTML",
  });
}
