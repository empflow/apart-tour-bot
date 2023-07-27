import { InlineKeyboardButton } from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";
import getMainMenuButtonsExcluding from "../utils/getMainMenuButtonsExcluding";

export default function buyTour(chatId: number) {
  const inline_keyboard: InlineKeyboardButton[][] = [
    [{ text: "Узнать стоимость", callback_data: "seePrices" }],
  ];

  bot.sendMessage(chatId, responseTexts.buyTour, {
    reply_markup: { inline_keyboard },
  });
}
