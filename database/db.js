import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function dbConnection() {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
   // mongoose.connect(process.env.DB_URL, params);
   mongoose.connect('mongodb+srv://kukila:kukila18@cluster0.7l6vwvh.mongodb.net/?retryWrites=true&w=majority')
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error occured while connecting database", error.message);
  }
}