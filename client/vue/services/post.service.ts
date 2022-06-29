import { AxiosResponse } from "axios"
import axios from "./axios.service"

export async function getPostService(id?: string): Promise<AxiosResponse> {
  const response = await axios.get("/post", { params: { id } })
  return response.data
}

// export async function createPostService(post): Promise<AxiosResponse> {
//   return await axios.post("/post", post)
// }
export async function createPostService(post) {
  const response = await axios.post("/post", post)
  return response.data
}

export async function updatePostService(id: string, newTask: object): Promise<AxiosResponse> {
  return await axios.put(`/post/${id}`, newTask)
}

export async function deletePostService(id: string): Promise<AxiosResponse> {
  return await axios.delete(`/post/${id}`)
}

export async function commentService(content: object) {
  const response = await axios.post("/post/comment", content)
  return response.data
}

export async function likeService(like: object) {
  const response = await axios.put("/post/like", like)
  return response.data
}

export async function commentAuthorService(id: object) {
  const response = await axios.get("/post/commentAuthor", id)
  return response.data
}
