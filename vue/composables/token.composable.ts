import axios from "../services/axios"

// TODO Validate token length
export function isToken(): boolean {
  return localStorage.getItem("token") ? true : false
}

export function setToken(token: string): void {
  localStorage.setItem("token", token)
  // TODO add headers on axios instance
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

// function handleUserAuth(token: string, isAuth: boolean) {
//   if (isAuth) auth.setUserAuthData(token)
//   else router.push("/login")
// }
