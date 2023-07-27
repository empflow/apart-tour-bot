import dotenv from "dotenv";
dotenv.config();
import "./bot";

// listeners
import "./listeners/callbackQuery";
import "./listeners/pollingError";

// commands
import "./commands/start";
import "./commands/getChatId";
