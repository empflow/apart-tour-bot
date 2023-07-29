import bot from "../bot";
import buyTour from "../cbHandlers/buyTour";
import seeExamples from "../cbHandlers/seeExamples";
import learnMore from "../cbHandlers/learnMore";
import seePrices from "../cbHandlers/seePrices";
import openMenu from "../cbHandlers/openMenu";
import seeReasonsToBuy from "../cbHandlers/seeReasonsToBuy";
import messageDirectly from "../cbHandlers/messageDirectly";
import respTexts from "../respTexts";

bot.on("callback_query", (q) => {
  const chatId = q.message?.chat.id;
  if (!chatId) return;
  const { data } = q;

  switch (data) {
    case "mainMenu":
      openMenu(chatId);
      break;
    case "learnMore":
      learnMore(chatId);
      break;
    case "why":
      seeReasonsToBuy(chatId);
      break;
    case "examples":
      seeExamples(chatId);
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
