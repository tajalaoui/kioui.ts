import mongoose, { Schema, model } from "mongoose"
import Comment from "./comment.subdoc"
import { IPost } from "../../../interfaces/IPost"

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
    comments: [Comment],
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        index: true,
        unique: false,
        required: false,
      },
    ],
  },
  { timestamps: true }
)

export default model<IPost>("Post", postSchema)
