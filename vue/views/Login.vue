<script setup lang="ts">
import { reactive } from "vue"
import { useAuthStore } from "../store/auth"
import { loginService } from "../services/auth.service"

const auth = useAuthStore()
const user = reactive({ email: "", password: "" })

async function getUser() {
  try {
    const userData = await loginService(user)
    auth.login(userData)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="getUser">
    <input v-model="user.email" type="email" />
    <input v-model="user.password" type="password" />
    <button type="submit">Submit</button>
  </form>
</template>
