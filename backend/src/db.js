import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/sistema-clinica-salud");
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
};
