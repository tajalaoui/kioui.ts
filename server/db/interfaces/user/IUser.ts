import { Document } from "mongoose"

interface IUser {
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
