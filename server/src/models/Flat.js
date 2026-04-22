import mongoose from "mongoose";

const flatSchema = new mongoose.Schema(
  {
    flatNumer: {
      type: Number,
    },
    block: {
      type: String,
    },
    floor: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flat", flatSchema);
