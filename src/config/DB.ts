import mongoose from "mongoose";

const DB = "";

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`connecting to ${conn.connection.host}`);
  } catch (error) {
    throw error;
  }
};

export default dbConfig;
