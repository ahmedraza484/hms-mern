import express from "express";
import {
  getUserDetails,
  login,
  logout,
  registerUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/getUserDetails", getUserDetails);

export default userRouter;
