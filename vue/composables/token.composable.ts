import axios from "../services/axios"
import { verifyJwtService } from "../services/auth.service"

export function getToken() {
  const token: string = localStorage.getItem("token")

  if (!token) return false

  return token
}

export async function isToken(): Promise<boolean> {
  const token = getToken()
  const isJwt = await verifyJwtService(token)

  if (!isJwt) {
    localStorage.removeItem("token")
    return false
  }

  return true
}

export function setToken(token: string): void {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  localStorage.setItem("token", token)
}
