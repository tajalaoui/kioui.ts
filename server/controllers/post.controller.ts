import { FilterQuery, ObjectId } from "mongoose"
import Post from "../db/models/post.model"
import { IPost } from "../interfaces/IPost"

// export async function createPost(input: IPost) {
//   return Post.create<IPost>(input)
// }

export async function createPost(user: string, content: string) {
  // return await Post.create({ content, user })

  const post = new Post({ content, user })
  return await post.save()
}

export async function findPosts() {
  return Post.find().populate("user", "_id username")
}

export async function findPost(query: FilterQuery<unkown>, options?: object, leanValue = false) {
  return Post.findOne(query, options).populate("user", "_id username").lean(leanValue)
}

export async function postLike(query: FilterQuery<string>, options?: object, leanValue = false) {
  return Post.findOne(query, options).populate("user", "_id username").lean(leanValue)
}

export async function postComment(query: FilterQuery<string>, options?: object, leanValue = false) {
  return Post.findOne(query, options).populate("user", "_id username").lean(leanValue)
}
