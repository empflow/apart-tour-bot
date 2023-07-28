import { InlineKeyboardButton } from "node-telegram-bot-api";
import {
  buyTourButton,
  examplesButton,
  learnMoreButton,
  messageDirectlyButton,
  whyButton,
} from "./buttons";

export default function getMainMenuButtons(): InlineKeyboardButton[][] {
  return [
    [learnMoreButton],
    [whyButton],
    [examplesButton],
    [buyTourButton],
    [messageDirectlyButton],
  ];
}
