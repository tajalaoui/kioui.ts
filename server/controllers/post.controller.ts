import { FilterQuery, ObjectId } from "mongoose"
import commentModel from "../db/models/post.model/comment.subdoc"
import Post from "../db/models/post.model/post.doc"
import Comment from "../db/models/post.model/comment.subdoc"
import { IPost } from "../interfaces/IPost"
import User from "../db/models/user.model/user.model"

// export async function createPost(input: IPost) {
//   return Post.create<IPost>(input)
// }

export async function createPost(user: string, content: string) {
  // return await Post.create({ content, user })

  const post = new Post({ content, user })
  return await post.save()
}

export async function findPosts() {
  return await Post.find()
    .populate("user comments.user")
    .sort({ createdAt: -1, "comments.createdAt": -1 })
}

export async function findPost(query: FilterQuery<unknown>, options?: object, leanValue = false) {
  return Post.findOne(query, options).populate("user", "_id username").lean(leanValue)
}

export async function postLike(userId, postId, leanValue = false) {
  function incLike() {
    return Post.findByIdAndUpdate(postId, { $push: { likedBy: userId } }, { new: true })
  }
  function decLike() {
    return Post.findByIdAndUpdate(postId, { $pull: { likedBy: userId } }, { new: true })
  }

  const post = await Post.findOne({ _id: postId, likedBy: { $in: userId } })

  const isUserLikedPost = !post ? await incLike() : await decLike()
  const likesCount = await Post.findById(postId)
  // const likesCount = await Post.aggregate([
  //   { $match: { _id: post._id } },
  //   { $project: { $size: "$likedBy" } },
  // ])

  // return { isUserLikedPost, likesCount }
  return { isUserLikedPost, likesCount: likesCount.likedBy.length }
}

export async function postComment(commentData, leanValue = false) {
  const { userId, postId, content } = commentData

  const comment = await Post.findByIdAndUpdate(
    postId,
    {
      $push: { comments: { user: userId, postId, content } },
    },
    { new: true }
  )
    .select("comments")
    .populate("comments.user")

  return comment.comments.at(-1)
}

export async function getCommentAuthor(userId) {
  return await User.findById(userId).select("username")
}
