import {
  InlineKeyboardMarkup,
  ReplyKeyboardMarkup,
} from "node-telegram-bot-api";
import bot from "../bot";
import respTexts from "../respTexts";
import { backToMenuCbBtn, sendMyPhoneNumKbBtn } from "../utils/buttons";

export default function messageDirectly(chatId: number) {
  const replyMarkupWithKeyboard: ReplyKeyboardMarkup = {
    keyboard: [[sendMyPhoneNumKbBtn]],
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  const replyMarkupWithInlineKeyboard: InlineKeyboardMarkup = {
    inline_keyboard: [[backToMenuCbBtn]],
  };

  bot.sendMessage(chatId, respTexts.messageDirectly, {
    reply_markup: replyMarkupWithKeyboard,
    parse_mode: "HTML",
  });
  bot.sendMessage(chatId, respTexts.goToMenuOption, {
    reply_markup: replyMarkupWithInlineKeyboard,
    parse_mode: "HTML",
  });
}
