import {
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
} from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";
import { backToMenuButton } from "../utils/buttons";

export default function messageDirectly(chatId: number) {
  const replyMarkupWithKeyboard: ReplyKeyboardMarkup = {
    keyboard: [
      [{ text: "Отправить мой номер телефона", request_contact: true }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  const replyMarkupWithInlineKeyboard: InlineKeyboardMarkup = {
    inline_keyboard: [[backToMenuButton]],
  };

  bot.sendMessage(chatId, responseTexts.messageDirectly, {
    reply_markup: replyMarkupWithKeyboard,
  });
  bot.sendMessage(chatId, "Или можете вернуться в меню:", {
    reply_markup: replyMarkupWithInlineKeyboard,
  });
}
