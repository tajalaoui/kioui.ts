import mongoose, { Schema } from "mongoose"
import { IPostDoc } from "../interfaces/post/IPost"

const userSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IPostDoc>("Post", userSchema)
