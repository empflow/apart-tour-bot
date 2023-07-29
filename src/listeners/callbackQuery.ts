import bot from "../bot";
import buyTour from "../cbHandlers/buyTour";
import examples from "../cbHandlers/examples";
import learnMore from "../cbHandlers/learnMore";
import seePrices from "../cbHandlers/seePrices";
import mainMenu from "../cbHandlers/mainMenu";
import why from "../cbHandlers/why";
import messageDirectly from "../cbHandlers/messageDirectly";
import respTexts from "../respTexts";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;

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
      console.warn(`${data} is not a valid callback query!`);
      bot.sendMessage(chatId, respTexts.err);
  }
});
