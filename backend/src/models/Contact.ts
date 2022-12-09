import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone No is Required"],
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
