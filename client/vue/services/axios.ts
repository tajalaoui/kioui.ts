import axios, { AxiosInstance } from "axios"
import { getToken } from "../composables/token.composable"

// TODO Add helpers to split code
const config = {
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

// TODO send token to api to verify then set
if (getToken()) config.headers["Authorization"] = `Bearer ${getToken()}`

const axiosInstance: AxiosInstance = axios.create(config)

export default axiosInstance
