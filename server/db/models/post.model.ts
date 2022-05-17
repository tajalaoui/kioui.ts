import mongoose, { Schema, Types } from "mongoose"
import { IPost } from "../../interfaces/IPost"

const userSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
  },
  { timestamps: true }
)

export default mongoose.model<IPost>("Post", userSchema)
