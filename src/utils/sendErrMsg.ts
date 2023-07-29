import { SendMessageOptions } from "node-telegram-bot-api";
import bot from "../bot";
import respTexts from "../respTexts";

export default function sendErrMsg(
  chatId: number,
  msg?: string,
  options?: SendMessageOptions
) {
  msg = msg ?? respTexts.err;
  options = options
    ? { ...options, parse_mode: "HTML" }
    : { parse_mode: "HTML" };

  bot.sendMessage(chatId, msg, options);
}
