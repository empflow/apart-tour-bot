import bot from "../bot";
import ErrorModel from "../models/ErrorModel";

bot.on("error", async (err) => {
  err = err as any;
  console.log("GENERIC ERROR");
  console.error(err.message);

  await ErrorModel.create({
    type: "generic",
    message: err.message,
    stacktrace: err.stack,
  });
});
