import { Document, Types } from "mongoose"

interface IUser {
  id?: Types.ObjectId | boolean
  username: string
  email: string
  password: string
}

interface IUserDoc extends IUser, Document {
  // fullName: string
  createdAt: Date
  updatedAt: Date
  findByCredentials(userEmail: string, userPassword: string): Promise<boolean>
}

export { IUser, IUserDoc }
