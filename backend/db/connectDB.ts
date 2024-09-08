import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGO_URI;
export const connectDB = async () => {
  try {
    console.log('mongo_uri: ', url);
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error connection to MongoDB: ', error.message);
      process.exit(1);
    }
  }
};
