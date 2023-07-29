import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn } from "../utils/buttons";

export default function seeReasonsToBuy(chatId: number) {
  bot.sendMessage(chatId, respTexts.reasonsToBuy, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
    parse_mode: "HTML",
  });
}
