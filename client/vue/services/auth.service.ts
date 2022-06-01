import { AxiosResponse } from "axios"
import axios from "./axios"

export async function registerService(user: object) {
  const response: AxiosResponse = await axios.post("/auth/register", user)
  return response.data
}

export async function loginService(userData: object) {
  const response: AxiosResponse = await axios.post("/auth/login", userData)
  axios.defaults.headers.common["Authorization"] = `Bearer ${response.data}`
  return response.data
}

export async function verifyJwtService(token: string): Promise<boolean> {
  return await axios.post("/auth/verifyJwt", token)
}

// TODO Handle logout
