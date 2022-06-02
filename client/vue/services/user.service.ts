import { AxiosResponse } from "axios"
import axios from "./axios.service"

export async function getUsersService(): Promise<AxiosResponse<[]>> {
  return await axios.get("/user")
}

export async function getUserService(id: string): Promise<AxiosResponse> {
  return await axios.get(`/user`, { params: { id } })
}

export async function updateUserService(id: string, data: object): Promise<AxiosResponse> {
  return await axios.put(`/user/${id}`, data)
}

export async function deleteUserService(id: string): Promise<AxiosResponse> {
  return await axios.delete(`/user/${id}`)
}
