import { ApiError } from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointment.model.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const postAppointment = AsyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointmentDate,
    address,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !appointmentDate ||
    !address
  ) {
    return next(new ApiError("Please Fill Full Form!", 400));
  }
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointmentDate,
    address,
  });
  res.status(200).json({
    success: true,
    appointment,
    message: "Appointment Send!",
  });
});
export { postAppointment };
