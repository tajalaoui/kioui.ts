import axios, { AxiosInstance } from "axios"
import { getToken } from "../composables/token.composable"

const config = {
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

const token: string = getToken()

if (token) config.headers["Authorization"] = `Bearer ${token}`

const axiosInstance: AxiosInstance = axios.create(config)

export default axiosInstance
