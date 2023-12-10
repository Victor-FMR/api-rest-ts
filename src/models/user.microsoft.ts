import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    microsoftId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      
    },
    
  },
  { timestamps: true }
);

export default model("UserMicrosoft", userSchema);
