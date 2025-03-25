import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ CONNECTED TO DB`, conn.connection.host);
  } catch (error) {
    console.error("❌ MONGODB CONNECTION FAILED!", error);
    process.exit(1);
  }
};

export default connectDB;
