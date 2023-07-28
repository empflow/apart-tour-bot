import { SendMessageOptions } from "node-telegram-bot-api";
import { backToMenuCbBtn } from "./buttons";

export const backToMenuOpts: SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [[backToMenuCbBtn]],
  },
};
