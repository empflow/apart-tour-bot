import { InlineKeyboardButton } from "node-telegram-bot-api";
import {
  buyTourCbBtn,
  examplesCbBtn,
  learnMoreCbBtn,
  messageDirectlyCbBtn,
  whyCbBtn,
} from "./buttons";

export default function getMainMenuButtons(): InlineKeyboardButton[][] {
  return [
    [learnMoreCbBtn],
    [whyCbBtn],
    [examplesCbBtn],
    [buyTourCbBtn],
    [messageDirectlyCbBtn],
  ];
}
