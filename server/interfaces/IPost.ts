import { Types } from "mongoose"

export interface IPost {
  // user: Types.ObjectId
  content: string
  comment: string
  likes: number
}
