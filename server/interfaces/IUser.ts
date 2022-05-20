import { Model } from "mongoose"

interface IUser {
  username: string
  email: string
  password: string
}

interface IUserMethods {
  isValidCredentials(userPassword: string): Promise<boolean>
  generateAuthToken(): Promise<Object>
}

type UserModel = Model<IUser, any, IUserMethods>

export { IUser, IUserMethods, UserModel }
