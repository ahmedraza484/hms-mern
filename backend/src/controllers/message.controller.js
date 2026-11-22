import { Message } from "../models/message.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const sendMessage = AsyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please Fill Full Form",
    });
  }
  await Message.create({
    firstName,
    lastName,
    email,
    phone,
    message,
  });
  return res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export { sendMessage };
