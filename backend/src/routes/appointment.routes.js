import express from "express";
import { postAppointment } from "../controllers/appointment.controller.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/sendAppointment", postAppointment);

export default appointmentRouter;
