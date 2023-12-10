import mongoose from "mongoose";
import {URI} from "../src/config";

const connectToDB = async() => {
  try {
     await mongoose.connect(URI ??'');
    console.log('***CONECATDO A MONGODB***')
  } catch (error) {
    console.error('error al conectar a mongo', error)
  }
};

export default connectToDB;