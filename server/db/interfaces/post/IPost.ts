import { Document, Types } from "mongoose"

interface IPost {
  // user: Types.ObjectId
  content: string
}

interface IPostDoc extends IPost, Document {
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export { IPost, IPostDoc }
