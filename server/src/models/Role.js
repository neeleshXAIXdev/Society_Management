import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "resident", "guard"],
    trim: true,
    unqiue: true,
  },
  roleDescription: {
    type: String,
  },
});

export default mongoose.model("Role", roleSchema);
