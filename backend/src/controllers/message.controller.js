import { Message } from "../models/message.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import { ApiError } from "../middlewares/errorMiddleware.js";

const sendMessage = AsyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ApiError("Please Fill Full Form", 400));
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
