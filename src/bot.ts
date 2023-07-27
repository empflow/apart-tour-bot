import TelegramBot from "node-telegram-bot-api";
import getEnvVar from "./utils/getEnvVar";

const token = getEnvVar("TOKEN");
const bot = new TelegramBot(token, { polling: true, filepath: false });
console.log("Bot started");

export default bot;
