import mongoose from "mongoose";

interface IError {
  type: string;
  message: string;
  stacktrace?: string;
}

const ErrorSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
  stacktrace: {
    required: false,
    type: String,
  },
});

const ErrorModel = mongoose.model<IError>("Error", ErrorSchema);
export default ErrorModel;
