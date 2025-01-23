import express from "express";
import { createUser } from "../controllers/user_controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", createUser);
