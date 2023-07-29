import dotenv from "dotenv";
dotenv.config();

import "./bot";

// listeners
import "./listeners/callbackQuery";
import "./listeners/error";
import "./listeners/pollingError";
import "./listeners/contact";

// commands
import "./commands/start";
import "./commands/getChatId";
import "./commands/menu";

import connectDb from "./utils/connectDb";
import "./utils/startWebServer";

(async () => {
  await connectDb();
  console.log("DB connected");
})();
