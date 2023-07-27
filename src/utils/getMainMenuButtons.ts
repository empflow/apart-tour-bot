import { InlineKeyboardButton } from "node-telegram-bot-api";
import {
  buyTourButton,
  examplesButton,
  learnMoreButton,
  whyButton,
} from "./buttons";

export default function getMainMenuButtons(): InlineKeyboardButton[][] {
  return [[learnMoreButton], [whyButton], [examplesButton], [buyTourButton]];
}
