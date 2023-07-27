import bot from "../bot";
import TelegramBot from "node-telegram-bot-api";
import { ReplyMarkup } from "../utils/types";

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const imgFileId =
    "AgACAgIAAxkDAAM8ZMJejTzfYM6U54HboOb9cpeEKVQAAr_OMRvSehlKWyltMhiSsoMBAAMCAAN3AAMvBA";

  const name = getUserNameFromMsg(msg);
  await bot.sendPhoto(chatId, imgFileId, {
    caption: getImgCaption(name),
    reply_markup: getReplyMarkup(),
  });
});

function getReplyMarkup(): ReplyMarkup {
  return {
    inline_keyboard: [[{ text: "Далее", callback_data: "showMainMenu" }]],
  };
}

function getUserNameFromMsg(msg: TelegramBot.Message) {
  let name = "";
  const defaultName = "Дорогой Пользователь";

  if (!msg.from) return defaultName;

  const firstName = msg.from.first_name as string | undefined;
  const lastName = msg.from.last_name as string | undefined;
  if (!firstName && !lastName) return defaultName;

  if (firstName) name += firstName;
  if (lastName) name += ` ${lastName}`;

  return name;
}

function getImgCaption(name: string) {
  return `👋 Привет, ${name}! Меня зовут Матвей и я снимаю такие туры апартаментов, что гости выстраиваются в очередь и пересматривают их по несколько раз😎!

📌 Этот бот поможет вам посмотреть примеры наших работ, узнать подробности и рассчитать стоимость.`;
}
