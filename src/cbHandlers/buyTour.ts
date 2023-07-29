import bot from "../bot";
import respTexts from "../respTexts";
import { seePricesCbBtn } from "../utils/buttons";

export default function buyTour(chatId: number) {
  bot.sendMessage(chatId, respTexts.buyTour, {
    reply_markup: { inline_keyboard: [[seePricesCbBtn]] },
    parse_mode: "HTML",
  });
}
