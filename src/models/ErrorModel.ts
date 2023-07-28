import mongoose from "mongoose";

interface IError {
  type: "generic" | "polling";
  message: string;
  stacktrace?: string;
}

const ErrorSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String,
    enum: ["generic", "polling"],
  },
  message: {
    type: String,
    default: null,
  },
  stacktrace: {
    required: false,
    type: String,
  },
});

const ErrorModel = mongoose.model<IError>("Error", ErrorSchema);
export default ErrorModel;
