import dotenv from "dotenv";
dotenv.config();
import "./bot";

// listeners
import "./listeners/callbackQuery";
import "./listeners/pollingError";
import "./listeners/contact";

// commands
import "./commands/start";
import "./commands/getChatId";
import connectDb from "./utils/connectDb";

(async () => {
  await connectDb();
  console.log("DB connected");
})();
