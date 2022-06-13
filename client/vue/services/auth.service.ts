import { AxiosResponse } from "axios"
import axios from "./axios.service"

export async function registerService(userData: object) {
  const response: AxiosResponse = await axios.post("/auth/register", userData)
  axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
  return response.data
}

export async function loginService(userData: object) {
  const response: AxiosResponse = await axios.post("/auth/login", userData)
  axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
  return response.data
}
