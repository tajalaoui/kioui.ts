<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "./../store/user.store"
import { setToken } from "../composables/token.composable"
import { loginService } from "../services/auth.service"

const userStore = useUserStore()
const router = useRouter()
const user = reactive({ email: "", password: "" })

async function onLogin() {
  try {
    const userData = await loginService(user)
    if (!userData) return false

    const { id, username, token } = userData

    setToken(token)
    userStore.SET_USER(id, username)
    router.push({ name: "Home" })
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="onLogin">
    <input class="input" v-model="user.email" type="email" placeholder="email" />
    <input class="input" v-model="user.password" type="password" placeholder="password" />
    <button class="button" type="submit">Submit</button>
  </form>
</template>
