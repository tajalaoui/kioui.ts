<script setup lang="ts">
import { reactive } from "vue"
import { setToken } from "../composables/token.composable"
import { registerService } from "../services/auth.service"

const user = reactive({ username: "", email: "", password: "" })

async function onRegister() {
  try {
    const token = await registerService(user)
    setToken(token)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="onRegister">
    <input v-model="user.username" placeholder="username" type="text" />
    <input v-model="user.email" placeholder="email" type="email" />
    <input v-model="user.password" placeholder="password" type="password" />
    <button type="submit">Submit</button>
  </form>
</template>
