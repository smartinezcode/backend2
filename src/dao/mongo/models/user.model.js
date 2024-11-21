import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    acount: { type: mongoose.Schema.Types.ObjectId, ref: acount },
})

export const accountModel = mongoose.model(userCollection, userSchema);