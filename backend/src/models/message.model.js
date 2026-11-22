import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contains at least 3 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contains at least 3 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contains exact 11 Digits!"],
    maxLength: [11, "Phone number must contains exact 11 Digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contains at least 10 characters!"],
    
  },
});

export const Message = mongoose.model("Message", messageSchema);
