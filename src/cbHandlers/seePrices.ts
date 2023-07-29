import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn, sendMyPhoneNumKbBtn } from "../utils/buttons";

export default function seePrices(chatId: number) {
  bot.sendMessage(chatId, respTexts.seePrices, {
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [[sendMyPhoneNumKbBtn]],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
}
