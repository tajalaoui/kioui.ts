import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import { IUserDoc, IUser } from "../../../interfaces/models/IUser"

const userSchema = new Schema(
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

// userSchema.index({ username: 1 })

// userSchema.virtual("fullName").get(function (this: IUserDoc) {
//   return `${this.firstName} ${this.lastName}`
// })

// When the user registers
userSchema.pre("save", async function (this: IUserDoc, next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next()

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hashSync(this.password, salt)
  this.password = hash

  return next()
})

// Compare a candidate password with the user's password
userSchema.methods.findByCredentials = async function (
  userEmail: string,
  userPassword: string
): Promise<boolean> {
  const errorMessage =
    "The email address or password that you've entered doesn't match any account."

  // TODO try this instead of USer
  const user = await this.findOne({ email: userEmail })
  if (!user) throw new Error(errorMessage)
  const isMatch = await bcrypt.compare(userPassword, user.password)
  if (!isMatch) throw new Error(errorMessage)

  const isUser = user ? true : false

  return isUser
}

export default mongoose.model<IUserDoc>("User", userSchema)
