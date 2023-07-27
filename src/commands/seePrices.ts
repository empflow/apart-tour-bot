import { InlineKeyboardButton } from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";

export default function seePrices(chatId: number) {
  const inline_keyboard: InlineKeyboardButton[][] = [
    [{ text: "Вернуться в меню", callback_data: "mainMenu" }],
  ];
  bot.sendMessage(chatId, responseTexts.seePrices, {
    reply_markup: { inline_keyboard },
  });
}
