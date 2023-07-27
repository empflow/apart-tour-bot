import { InlineKeyboardButton } from "node-telegram-bot-api";
import getMainMenuButtons from "./getMainMenuButtons";

export default function getMainMenuButtonsExcluding(
  callbackDataOfButtonToExclude: string
) {
  const allButtons = getMainMenuButtons();
  const filteredButtons: InlineKeyboardButton[][] = [];

  for (const row of allButtons) {
    const filteredRow: InlineKeyboardButton[] = [];
    for (const button of row) {
      if (button.callback_data !== callbackDataOfButtonToExclude) {
        filteredRow.push(button);
      }
    }
    filteredButtons.push(filteredRow);
  }

  return filteredButtons;
}
