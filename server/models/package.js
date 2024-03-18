import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    collection: "Package",
  }
);

export default mongoose.model("Package", packageSchema);
