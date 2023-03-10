import mongoose from "mongoose";
import environmentVaraible from "./environmentVaiable";

const DB = environmentVaraible.MONGODB_STRING_LOCAL;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`connecting to ${conn.connection.host}`);
  } catch (error) {
    throw error;
  }
};

export default dbConfig;
