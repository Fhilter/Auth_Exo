import { UserModel } from "../schema";

export const UserRepository = {

    create: async (data) => {
            const newUser = new UserModel(data);
            const savedUser = await newUser.save()
            return savedUser;
    },
    findByEmail: async (email ) => {
        try {
            return await UserModel.findByEmail(email);
            } catch (err) {
                return null
            }
    }
    
}