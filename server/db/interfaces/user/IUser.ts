import { Document, Types } from "mongoose"

interface IUser {
  // id: Types.ObjectId
  username: string
  email: string
  password: string
}

interface IUserDoc extends IUser, Document {
  // fullName: string
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export { IUser, IUserDoc }
