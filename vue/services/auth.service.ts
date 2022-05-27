import { AxiosResponse } from "axios"
import axios from "./axios"

export async function registerService(user: object) {
  const result: AxiosResponse = await axios.post("/auth/register", user)
  return result.data
}

export async function loginService(userData: object) {
  const result: AxiosResponse = await axios.post("/auth/login", userData)
  return result.data
}

export async function verifyJwtService(token: string | boolean): Promise<boolean> {
  return await axios.post("/auth/verifyJwt", token)
}

// TODO Handle logout
