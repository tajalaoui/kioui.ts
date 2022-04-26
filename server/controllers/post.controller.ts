import { FilterQuery } from "mongoose"
import Post from "../db/models/post.model"
import { IPost, IPostDoc } from "../db/interfaces/post/IPost"

async function createPost(input: IPost) {
  return Post.create<IPost>(input)
}

async function findPost(query: FilterQuery<IPostDoc>, options: object = { lean: true }) {
  return Post.findOne(query, null, options)
}

export { createPost, findPost }
