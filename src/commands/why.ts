import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function why(chatId: number) {
  bot.sendMessage(chatId, respTexts.why, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
