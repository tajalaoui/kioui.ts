import axios from "../services/axios.service"

export function getToken(): string {
  return localStorage.getItem("token")
}

export function setToken(token: string): void {
  localStorage.setItem("token", token)
}

export async function verifyToken() {
  return await axios.post("/auth/token", { token: getToken() })
}
