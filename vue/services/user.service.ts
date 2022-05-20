import { AxiosResponse } from "axios"
import axios from "./axios"

export async function getUsersService(): Promise<AxiosResponse<[]>> {
  return await axios.get("/user")
}

export async function getUserService(id: string): Promise<AxiosResponse> {
  return await axios.get(`/user`, { params: { id } })
}

export async function updateUserService(id: string, newTask: object): Promise<AxiosResponse> {
  return await axios.put(`/user/${id}`, newTask)
}

export async function deleteUserService(id: string): Promise<AxiosResponse> {
  return await axios.delete(`/user/${id}`)
}
