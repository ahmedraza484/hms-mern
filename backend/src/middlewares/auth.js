import { User } from "../models/user.model.js";
import { ApiError } from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

const isUserAuthenticated = async (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    return next(new ApiError("User is not authenticated!", 401));
  }
  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
};

export { isUserAuthenticated };
