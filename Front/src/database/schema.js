import mongoose from "mongoose"

export const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatarURL: {type: String, required: false},
})

export const UserModel = mongoose.model('Users', userSchema);
