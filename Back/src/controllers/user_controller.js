import { UserRepository } from "../user_repository.js";
import bcrypt from "bcryptjs";

const saltRounds = 10;

export const createUser = async (req, res) => {
  const { email, password, avatarURL = null } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  try {
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = {
      email,
      password: hashedPassword,
      avatarURL: avatarURL || null,
    };

//const savedUser = await UserRepository.createUser(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const findByEmail = async (req, res) => {};
