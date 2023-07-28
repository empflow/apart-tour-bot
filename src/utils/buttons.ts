import { InlineKeyboardButton } from "node-telegram-bot-api";

export const learnMoreButton: InlineKeyboardButton = {
  text: "📖 Подробнее про stop-motion туры",
  callback_data: "learnMore",
};

export const whyButton: InlineKeyboardButton = {
  text: "❓ Зачем мне нужен stop-motion тур?",
  callback_data: "why",
};

export const examplesButton: InlineKeyboardButton = {
  text: "👀 Посмотреть примеры работ",
  callback_data: "examples",
};

export const buyTourButton: InlineKeyboardButton = {
  text: "🎥 Хочу отснять недвижимость",
  callback_data: "buyTour",
};

export const messageDirectlyButton: InlineKeyboardButton = {
  text: "📞 Связаться со мной",
  callback_data: "messageDirectly",
};
