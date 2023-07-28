import { KeyboardButton } from "node-telegram-bot-api";
import bot from "../bot";
import responseTexts from "../responseTexts";

export default function messageDirectly(chatId: number) {
  const keyboard: KeyboardButton[][] = [
    [{ text: "Отправить мой номер телефона", request_contact: true }],
  ];

  // is_persistent always keeps the button keyboard open when the regular keyboard is hidden
  // one_time_keyboard hides the buttons keyboard as soon as one of the buttons has been pressed (can be re-opened with a keyboard icon)

  bot.sendMessage(chatId, responseTexts.messageDirectly, {
    reply_markup: { keyboard, resize_keyboard: true },
  });
}
