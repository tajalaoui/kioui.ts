import { IComment } from "./../../../interfaces/IPost"
import mongoose, { Schema } from "mongoose"

const commentSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", index: true, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
)

export default commentSchema
