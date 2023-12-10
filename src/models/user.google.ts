import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: true }
);

export default model("UserGoogle", userSchema);
