import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function learnMore(chatId: number) {
  bot.sendMessage(chatId, respTexts.learnMore, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
