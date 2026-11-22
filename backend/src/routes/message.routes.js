import { sendMessage } from "../controllers/message.controller.js";
import express from 'express';


const messageRouter = express.Router()

messageRouter.post("/sendMessage",sendMessage)

export default messageRouter