import { verifyJwtService } from "../services/auth.service"

export function getToken() {
  return localStorage.getItem("token")
}

export async function isToken(token: string): Promise<boolean> {
  const isJwt = await verifyJwtService(token)

  return isJwt ? true : false
}

export function setToken(token: string): void {
  localStorage.setItem("token", token)
}
