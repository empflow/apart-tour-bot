import bot from "../bot";

bot.on("polling_error", (err) => {
  console.error(err);
});
