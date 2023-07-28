import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuCbBtn, sendMyPhoneNumberKbBtn } from "../utils/buttons";

export default function seePrices(chatId: number) {
  bot.sendMessage(chatId, responseTexts.seePrices, {
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [[sendMyPhoneNumberKbBtn]],
      one_time_keyboard: true,
    },
  });
}
