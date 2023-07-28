import { Contact as IContact } from "node-telegram-bot-api";
import bot from "../bot";
import Contact from "../models/Contact";
import respTexts from "../respTexts";
import { backToMenuCbBtn } from "../utils/buttons";
import isErrDuplicateErr from "../utils/isErrDuplicateErr";
import sendErrMsg from "../utils/sendErrMsg";
import { backToMenuOpts } from "../utils/sendMsgOpts";

bot.on("contact", async (msg) => {
  const chatId = msg.chat.id;
  if (!msg.contact) return sendErrMsg(chatId);

  try {
    await saveContactToDb(msg.contact);
  } catch (err) {
    if (isErrDuplicateErr(err)) {
      return sendErrMsg(chatId, respTexts.duplicatePhoneNumErr, backToMenuOpts);
    }
    return sendErrMsg(chatId, respTexts.savingPhoneNumErr, backToMenuOpts);
  }

  bot.sendMessage(chatId, respTexts.contactReceived, {
    reply_markup: { inline_keyboard: [[backToMenuCbBtn]] },
  });
});

async function saveContactToDb(contact: IContact) {
  const { phone_number, first_name, last_name, user_id, vcard } = contact;

  return Contact.create({
    phoneNumber: phone_number,
    firstName: first_name,
    lastName: last_name,
    userId: user_id,
    vcard,
  });
}
