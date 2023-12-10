import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    discordId: {
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
     guilds: {
        type : Array,
        required: true,
    },
  },
  { timestamps: true }
);

export default model("Userdiscord", userSchema);
