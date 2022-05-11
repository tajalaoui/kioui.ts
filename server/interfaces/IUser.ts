import { Document, Types } from "mongoose"

interface IUser {
  username: string
  email: string
  password: string
}

interface IUserDoc extends IUser, Document {
  createdAt: Date
  updatedAt: Date
  findByCredentials(userEmail: string, userPassword: string): Promise<boolean>
}

export { IUser, IUserDoc }
