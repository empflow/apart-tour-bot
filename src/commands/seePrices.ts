import { InlineKeyboardButton } from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton } from "../utils/buttons";

export default function seePrices(chatId: number) {
  bot.sendMessage(chatId, responseTexts.seePrices, {
    reply_markup: { inline_keyboard: [[backToMenuButton]] },
  });
}
