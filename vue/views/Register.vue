<script setup lang="ts">
import { reactive } from "vue"
import { useAuthStore } from "../store/auth"
import { registerService } from "../services/auth.service"

const auth = useAuthStore()
const user = reactive({ username: "", email: "", password: "" })

async function register() {
  try {
    const userData = await registerService(user)
    auth.register(userData)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="register">
    <input v-model="user.username" placeholder="username" type="text" />
    <input v-model="user.email" placeholder="email" type="email" />
    <input v-model="user.password" placeholder="password" type="password" />
    <button type="submit">Submit</button>
  </form>
</template>
