import { defineStore } from "pinia"
import { AxiosResponse } from "axios"
import axios from "../services/axios"

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    id: "",
    username: "",
    token: "",
    // isNewUser: true,
  }),
  actions: {
    setUserAuthData(payload) {
      const { _id, username, token } = payload

      this.id = _id
      this.username = username
      this.token = token

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      localStorage.setItem("user", JSON.stringify(payload))
    },
    register(payload: AxiosResponse) {
      this.setUserAuthData(payload)
    },
    login(payload: object) {
      this.setUserAuthData(payload)
    },
    logout() {
      localStorage.removeItem("user")
    },
  },
})
