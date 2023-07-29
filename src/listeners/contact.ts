import { Contact as IContact } from "node-telegram-bot-api";
import bot from "../bot";
import { ownerWithBotGroupChatId } from "../config";
import Contact from "../models/Contact";
import respTexts from "../respTexts";
import isErrDuplicateErr from "../utils/isErrDuplicateErr";
import sendErrMsg from "../utils/sendErrMsg";
import { backToMenuBtnOpts } from "../utils/sendMsgOpts";

bot.on("contact", async (msg) => {
  const chatId = msg.chat.id;

  if (isNaN(ownerWithBotGroupChatId)) {
    return sendErrMsg(chatId, respTexts.err, backToMenuBtnOpts);
  }
  if (!msg.contact) return sendErrMsg(chatId);

  try {
    await saveContactToDb(msg.contact);
  } catch (err) {
    if (isErrDuplicateErr(err)) {
      return sendErrMsg(
        chatId,
        respTexts.duplicatePhoneNumErr,
        backToMenuBtnOpts
      );
    }
    return sendErrMsg(chatId, respTexts.savingPhoneNumErr, backToMenuBtnOpts);
  }

  const formattedContact = formatContact(msg.contact);
  bot.sendMessage(ownerWithBotGroupChatId, formattedContact);
  bot.sendMessage(chatId, respTexts.contactReceived, backToMenuBtnOpts);
});

function formatContact(contact: IContact) {
  let result = `First name: ${contact.first_name}`;
  if (contact.last_name) result += `\nLast name: ${contact.last_name}`;
  result += `\nPhone number: ${contact.phone_number}`;
  if (contact.user_id) result += `\nUser id: ${contact.user_id}`;
  if (contact.vcard) result += `\nVcard: ${contact.vcard}`;

  return result;
}

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
