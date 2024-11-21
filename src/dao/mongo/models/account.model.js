import mongoose from "mongoose";

const userCollection = "account";

const userSchema = new mongoose.Schema({
    number: { type: String, required: true },
    alias: { type: String, required: true },
    balance: { type: Number, default: 0 },
    userId: { type: String},
})

export const accountModel = mongoose.model(accountCollection, accountSchema);