import bot from "../bot";
import buyTour from "../commands/buyTour";
import examples from "../commands/examples";
import learnMore from "../commands/learnMore";
import seePrices from "../commands/seePrices";
import mainMenu from "../commands/mainMenu";
import why from "../commands/why";
import messageDirectly from "../commands/messageDirectly";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;
  console.log(data);

  switch (data) {
    case "mainMenu":
      mainMenu(chatId);
      break;
    case "learnMore":
      learnMore(chatId);
      break;
    case "why":
      why(chatId);
      break;
    case "examples":
      examples(chatId);
      break;
    case "buyTour":
      buyTour(chatId);
      break;
    case "seePrices":
      seePrices(chatId);
      break;
    case "messageDirectly":
      messageDirectly(chatId);
      break;
    default:
      console.warn("No such callback query!");
      const errorResponseText =
        "Извините, произошла ошибка. Можете попробовать ещё раз, но это вряд ли поможет";
      bot.sendMessage(chatId, errorResponseText);
  }
});
