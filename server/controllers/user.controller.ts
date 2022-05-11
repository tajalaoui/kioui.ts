import { FilterQuery } from "mongoose"
import { ObjectId } from "mongodb"
import User from "../db/models/user.model"
import { IUser, IUserDoc } from "../interfaces/IUser"

async function createUser(input: IUser) {
  return User.create<IUser>(input)
}

async function findUser(query: FilterQuery<IUserDoc>, options?: object, leanValue = false) {
  return User.findOne(query, options).lean(leanValue)
}

async function findUserById(id: unknown, options?: object) {
  return User.findById(id, options)
}

async function loginUser({
  email,
  password,
}: {
  email: IUser["email"]
  password: IUser["password"]
}) {
  const user = await findUser({ email }, { lean: false })
  console.log(user)
  if (!user) throw new Error("User does not exist")

  return user.findByCredentials(email, password)
}

export { createUser, findUserById, findUser, loginUser }
