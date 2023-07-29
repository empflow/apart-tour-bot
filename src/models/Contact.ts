import mongoose from "mongoose";

interface IContact {
  phoneNumber: string;
  firstName: string;
  lastName?: string;
  userId?: number;
  vcard?: string;
}

const ContactSchema = new mongoose.Schema<IContact>({
  phoneNumber: {
    required: true,
    type: String,
    unique: true,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: false,
    type: String,
  },
  userId: {
    required: false,
    type: Number,
  },
  vcard: {
    required: false,
    type: String,
  },
});

const Contact = mongoose.model<IContact>("PhoneNumber", ContactSchema);
export default Contact;
