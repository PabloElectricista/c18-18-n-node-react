import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, trim: true }, //type:String,
    email: { type: String, required: true, trim: true, unique: true }, //type:String,
    password: { type: String, required: true }, //type:String
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
