import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.MONGO_URI as string, {
    dbName: "address-book",
  });
};

export default dbConnect;
