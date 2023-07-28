import {
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
} from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton, sendMyPhoneNumberButton } from "../utils/buttons";

export default function messageDirectly(chatId: number) {
  const replyMarkupWithKeyboard: ReplyKeyboardMarkup = {
    keyboard: [[sendMyPhoneNumberButton]],
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  const replyMarkupWithInlineKeyboard: InlineKeyboardMarkup = {
    inline_keyboard: [[backToMenuButton]],
  };

  bot.sendMessage(chatId, responseTexts.messageDirectly, {
    reply_markup: replyMarkupWithKeyboard,
    parse_mode: "HTML",
  });
  bot.sendMessage(chatId, "Или можете вернуться в меню:", {
    reply_markup: replyMarkupWithInlineKeyboard,
    parse_mode: "HTML",
  });
}
