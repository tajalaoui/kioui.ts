import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "inputBlurAutofocus",
  state: () => ({
    isAutofocus: false,
  }),
  actions: {
    setAutofocus() {
      console.log(1)
    },
  },
})
