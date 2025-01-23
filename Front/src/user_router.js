import express from "express";
import { UserRepository } from "./database/repository/user_repository";
import { UserModel } from "./database/schema";

export const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds = 10;

userRouter.post('/', async (req, res) => {
    const { email, password, avatarURL } = req.body;

    if (!email || name.trim() === "") {
        return res.status(400).json({ message: "email required" });
    }

    const newUser = {
        email,
        password: priority !== undefined ? parseInt(priority, 10) : Math.floor(Math.random() * 5) + 1,
        avatarURL: false,  
    };

    try {
        const savedUser = await UserRepository.create(newUser);
        res.json({ message: 'New user created', data: savedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    }
});