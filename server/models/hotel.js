import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: String,
    chekinTime: String,
    checkoutTime: String,
    email: [{ type: String }],
    contact: [{ type: String }],
    owner: String,

    // address
    address: String,
    country: String,
    state: String,
    city: String,
    postalCode: String,

    // description
    tagLine: String,
    description: String,

    // roooms
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  },

  {
    timestamps: true,
    collection: "Hotel",
  }
);

export default mongoose.model("Hotel", hotelSchema);
