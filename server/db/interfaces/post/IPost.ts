import { Document } from "mongoose"

interface IPost {
  content: string
}

interface IPostDoc extends IPost, Document {
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export { IPost, IPostDoc }
