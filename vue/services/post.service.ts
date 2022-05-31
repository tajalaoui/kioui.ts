import { AxiosResponse } from "axios"
import axios from "./axios"

export async function getPostService(id?: string): Promise<AxiosResponse> {
  console.log(axios.defaults.headers)
  return await axios.get("/post", { params: { id } })
}

export async function createPostService(post: object): Promise<AxiosResponse> {
  return await axios.post("/post", post)
}

export async function updatePostService(id: string, newTask: object): Promise<AxiosResponse> {
  return await axios.put(`/post/${id}`, newTask)
}

export async function deletePostService(id: string): Promise<AxiosResponse> {
  return await axios.delete(`/post/${id}`)
}
