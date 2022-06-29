import { Types, Document, Model } from "mongoose"

export interface IPost {
  user: Types.ObjectId
  content: string
  comments: Types.DocumentArray<IComment>
  likes: number
  likedBy: string
}

export interface IComment extends Types.Subdocument {
  user: Types.ObjectId
  postId: Types.ObjectId
  comment: string
}

