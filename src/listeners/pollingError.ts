import bot from "../bot";
import ErrorModel from "../models/ErrorModel";

bot.on("polling_error", async (err) => {
  err = err as any;
  console.error("POLLING ERROR");
  console.error(err.message);

  await ErrorModel.create({
    type: "polling",
    message: err.message,
    stacktrace: err.stack,
  });
});
