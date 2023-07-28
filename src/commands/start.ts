import bot from "../bot";
import TelegramBot from "node-telegram-bot-api";
import { ReplyMarkup } from "../utils/types";
import respTexts from "../respTexts";

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const imgFileId =
    "AgACAgIAAxkDAAM8ZMJejTzfYM6U54HboOb9cpeEKVQAAr_OMRvSehlKWyltMhiSsoMBAAMCAAN3AAMvBA";

  const name = getUserNameFromMsg(msg);
  await bot.sendPhoto(chatId, imgFileId, {
    caption: respTexts.start(name),
    reply_markup: getReplyMarkup(),
    parse_mode: "HTML",
  });
});

function getReplyMarkup(): ReplyMarkup {
  return {
    inline_keyboard: [[{ text: "Далее", callback_data: "mainMenu" }]],
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
