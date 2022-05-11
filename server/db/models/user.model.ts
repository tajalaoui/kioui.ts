import mongoose, { Schema } from "mongoose"
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

userSchema.methods.findByCredentials = async function (
  userEmail: string,
  userPassword: string
): Promise<boolean> {
  const errorMessage =
    "The email address or password that you've entered doesn't match any account."

  // TODO try this instead of USer
  const user = await User.findOne({ email: userEmail })
  if (!user) throw new Error(errorMessage)
  const isMatch = await bcrypt.compare(userPassword, user.password)
  if (!isMatch) throw new Error(errorMessage)

  const isUser = user ? true : false

  return isUser
}

const User = mongoose.model<IUser, UserModel>("User", userSchema)

export default User
