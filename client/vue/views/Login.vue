<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { setToken } from "../composables/token.composable"
import { loginService } from "../services/auth.service"

const router = useRouter()
const user = reactive({ email: "", password: "" })

async function onLogin() {
  try {
    const token = await loginService(user) 
    if (!token) return false

    setToken(token)
    router.push({name: "Home"})
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="onLogin">
    <input v-model="user.email" type="email" />
    <input v-model="user.password" type="password" />
    <button type="submit">Submit</button>
  </form>
</template>
