import { Model } from "mongoose"

interface IUser {
  username: string
  email: string
  password: string
}

interface IUserMethods {
  findByCredentials(userEmail: string, userPassword: string): Promise<boolean>
}

type UserModel = Model<IUser, any, IUserMethods>

export { IUser, IUserMethods, UserModel }
