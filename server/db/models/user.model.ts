import { Schema, model } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { IUser, IUserMethods, UserModel } from "../../interfaces/IUser"

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next()

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash

  return next()
})

// Generating token after registering OR login
userSchema.methods.generateAuthToken = async function () {
  return await jwt.sign({ userId: this._id.toString() }, process.env.JWT_SECRET)
}

userSchema.methods.isValidCredentials = async function (userPassword: string): Promise<boolean> {
  const errorMessage =
    "The email address or password that you've entered doesn't match any account."

  const isMatch = await bcrypt.compare(userPassword, this.password)
  if (!isMatch) throw new Error(errorMessage)

  return isMatch
}

const User = model<IUser, UserModel>("User", userSchema)

export default User
