import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    username: "",
  }),
  actions: {
    SET_USER(id: string, username: string) {
      this.id = id
      this.username = username
    },
  },
})
