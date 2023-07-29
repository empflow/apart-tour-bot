import { InlineKeyboardButton, KeyboardButton } from "node-telegram-bot-api";

// Cb stands for callback
// Kb stands for keyboard
// Btn stands for button

export const learnMoreCbBtn: InlineKeyboardButton = {
  text: "📖 Подробнее про stop-motion туры",
  callback_data: "learnMore",
};

export const whyCbBtn: InlineKeyboardButton = {
  text: "❓ Зачем мне нужен stop-motion тур?",
  callback_data: "why",
};

export const examplesCbBtn: InlineKeyboardButton = {
  text: "👀 Посмотреть примеры работ",
  callback_data: "examples",
};

export const buyTourCbBtn: InlineKeyboardButton = {
  text: "🎥 Хочу отснять недвижимость",
  callback_data: "buyTour",
};

export const messageDirectlyCbBtn: InlineKeyboardButton = {
  text: "📞 Связаться со мной",
  callback_data: "messageDirectly",
};

export const backToMenuCbBtn: InlineKeyboardButton = {
  text: "↩️ Вернуться в меню",
  callback_data: "mainMenu",
};

export const seePricesCbBtn: InlineKeyboardButton = {
  text: "Узнать стоимость",
  callback_data: "seePrices",
};

export const messageDirectlyBtnWithLink: InlineKeyboardButton = {
  text: `<a href="https://t.me/@empflow">Написать напрямую</a>`,
};

export const sendMyPhoneNumKbBtn: KeyboardButton = {
  text: "📞 Отправить номер телефона",
  request_contact: true,
};
