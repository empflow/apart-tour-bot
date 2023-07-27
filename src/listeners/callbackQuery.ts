import bot from "../bot";
import learnMore from "../commands/learnMore";
import showMainMenu from "../commands/showMainMenu";
import why from "../commands/why";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;
  console.log(data);

  switch (data) {
    case "mainMenu":
      showMainMenu(chatId);
      break;
    case "learnMore":
      learnMore(chatId);
      break;
    case "why":
      why(chatId);
      break;
    default:
      console.warn("No such callback query!");
      const errorResponseText =
        "Извините, произошла ошибка. Можете попробовать ещё раз, но это вряд ли поможет";
      bot.sendMessage(chatId, errorResponseText);
  }
});
