import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
      mongoose.connect("mongodb+srv://santimaz23:OG5JTVvyQZiTevCn@cluster0.l3luw.mongodb.net/")
      console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}