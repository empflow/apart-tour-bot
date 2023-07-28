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
  };

  const replyMarkupWithInlineKeyboard: InlineKeyboardMarkup = {
    inline_keyboard: [[backToMenuButton]],
  };

  // is_persistent always keeps the button keyboard open when the regular keyboard is hidden
  // one_time_keyboard hides the buttons keyboard as soon as one of the buttons has been pressed (can be re-opened with a keyboard icon)

  bot.sendMessage(chatId, responseTexts.messageDirectly, {
    reply_markup: replyMarkupWithKeyboard,
  });
  bot.sendMessage(chatId, "Или можете вернуться в меню:", {
    reply_markup: replyMarkupWithInlineKeyboard,
  });
}
