import getEnvVar from "./utils/getEnvVar";

function getOwnerWithBotGroupChatId() {
  const envVarName = "OWNER_WITH_BOT_GROUP_CHAT_ID";
  const envVarValue = Number(getEnvVar(envVarName));
  if (isNaN(envVarValue)) {
    throw new Error("OWNER_WITH_BOT_GROUP_CHAT_ID is not a number");
  }
  return envVarValue;
}

export const ownerWithBotGroupChatId = getOwnerWithBotGroupChatId();
