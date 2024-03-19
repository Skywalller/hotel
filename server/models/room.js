import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: String,
    data: {
      type: Map, // year
      of: {
        type: Map, //month
        of: {
          type: Map, //day
          of: {
            _id: String,
            price: Number,
            availability: Boolean,
            inventory: Number,
          },
        },
      },
    },
    package: [{ type: mongoose.Schema.Types.ObjectId, ref: "Package" }],
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  },
  { timestamps: true, collection: "Room" }
);

export default mongoose.model("Room", roomSchema);
