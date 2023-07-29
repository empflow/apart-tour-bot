import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function examples(chatId: number) {
  bot.sendMessage(chatId, respTexts.examples, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
