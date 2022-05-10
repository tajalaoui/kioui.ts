import { FilterQuery } from "mongoose"
import Post from "../db/models/post.model"
import { IPost, IPostDoc } from "../../interfaces/models/IPost"

async function createPost(input: IPost) {
  return Post.create<IPost>(input)
}

async function findPost(query: FilterQuery<IPostDoc>, options?: object, leanValue = true) {
  return Post.findOne(query, options).lean(leanValue)
}

export { createPost, findPost }
