import { UserModel } from "./models/user_Schema.js";

export const UserRepository = {
  createUser: async (data) => {
    const newUser = new UserModel(data);
    const savedUser = await newUser.save();
    return savedUser;
  },
  findByEmail: async (email) => {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      console.error("Error finding user by email:", err);
      return null;
    }
  },
};
