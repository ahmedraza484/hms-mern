import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import messageRouter from "./src/routes/message.routes.js";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";
// import connectDB from "./src/database/dbConnection.js";

const app = express();
dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
);

// connectDB();

app.use("/api/v1/message", messageRouter);




app.use(errorMiddleware)
export default app;
