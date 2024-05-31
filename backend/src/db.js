import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};
