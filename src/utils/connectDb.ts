import mongoose from "mongoose";
import getEnvVar from "./getEnvVar";

export default async function connectDb() {
  const MONGO_URI = getEnvVar("MONGO_URI");
  await mongoose.connect(MONGO_URI, {
    dbName: "apart-tour-bot",
  });
}
