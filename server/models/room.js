import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: String,
    data: {
      type: Map,
      of: {
        price: Number,
        availability: Boolean,
        inventory: Number,
      },
    },
  },
  { timestamps: true, collection: "Room" }
);

export default mongoose.model("Room", roomSchema);

const priceSchema = new mongoose.Schema({});
