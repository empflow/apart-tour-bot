import { InlineKeyboardMarkup } from "node-telegram-bot-api";
import bot from "./bot";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;

  switch (data) {
    case "showMainMenu":
      const responseText = "Нажмите одну из кнопок ниже:";
      bot.sendMessage(chatId, responseText, {
        reply_markup: getShowMainMenuReplyMarkup(),
      });
  }
});

function getShowMainMenuReplyMarkup(): InlineKeyboardMarkup {
  return {
    inline_keyboard: [
      [
        {
          text: "📖 Подробнее про stop-motion туры",
          callback_data: "learnMore",
        },
      ],
      [
        {
          text: "❓ Зачем мне нужен stop-motion тур?",
          callback_data: "why",
        },
      ],
      [
        {
          text: "👀 Посмотреть примеры работ",
          callback_data: "examples",
        },
      ],
      [
        {
          text: "🎥 Хочу отснять недвижимость",
          callback_data: "buyTour",
        },
      ],
    ],
  };
}
