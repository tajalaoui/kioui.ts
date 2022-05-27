import axios, { AxiosInstance } from "axios"
import { getToken } from "../composables/token.composable"

const query = getToken()

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${query}`,
  },
})

export default axiosInstance
