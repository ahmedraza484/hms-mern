import express from "express";
import {
  getUserDetails,
  login,
  logout,
  registerUser,
} from "../controllers/user.controller.js";
import { isUserAuthenticated } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/logout", isUserAuthenticated, logout);
userRouter.get("/getUserDetails", isUserAuthenticated, getUserDetails);

export default userRouter;
