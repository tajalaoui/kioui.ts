import { AxiosResponse } from "axios"
import axios from "./axios"

export async function registerService(user: object): Promise<AxiosResponse> {
  return await axios.post("/auth/register", user)
}

export async function loginService(userData: object) {
  const result: AxiosResponse = await axios.post(`/auth/login`, userData)
  const { token } = result.data
  const { _id, username } = result.data.user

  return { _id, username, token }
}

// ! Delete
export async function logoutService(): Promise<AxiosResponse> {
  return await axios.post(`/auth/logout`)
}
