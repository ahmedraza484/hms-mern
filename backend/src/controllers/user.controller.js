import asyncHandler from "../utils/AsyncHandler.js";
import { ApiError } from "../middlewares/errorMiddleware.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/jwtToken.js";

const registerUser = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, gender, password } = req.body;
  if (!firstName || !lastName || !email || !phone || !gender || !password) {
    return next(new ApiError("All fields are required!", 400));
  }
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    return next(new ApiError("User already registered!", 400));
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    gender,
    password,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully!",
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError("All fields are required!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ApiError("Invalid email or password!", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ApiError("Invalid email or password!", 400));
  }
  generateToken(user, "User logged In successfully!", 200, res);
  // res.status(200).json({
  //   success:true,
  //   message:""
  // })
});
const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie("userToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logout Successfully!",
    });
});

const getUserDetails = asyncHandler(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, login, logout, getUserDetails };
