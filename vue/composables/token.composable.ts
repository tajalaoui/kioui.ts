import axios from "../services/axios"
import { verifyJwtService } from "../services/auth.service"

export function getToken() {
  return localStorage.getItem("token")
}

export async function isToken(): Promise<boolean> {
  const token = getToken()
  const isJwt = await verifyJwtService(token ? token : false)

  if (!isJwt) {
    localStorage.removeItem("token")
    return false
  }

  return true
}

export function setToken(token: string): void {
  localStorage.setItem("token", token)
}
