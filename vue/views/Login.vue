<script setup lang="ts">
import { reactive } from "vue"
import { setToken } from "../composables/token.composable"
import { loginService } from "../services/auth.service"

const user = reactive({ email: "", password: "" })

async function onLogin() {
  try {
    const token = await loginService(user)
    setToken(token)
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
