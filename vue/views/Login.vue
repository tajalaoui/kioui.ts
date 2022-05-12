<script setup lang="ts">
import { ref, reactive } from "vue"
import { loginUserService } from "../services/user.service"

const user = reactive({ email: "", password: "" })

async function getUser() {
  try {
    await loginUserService(user)
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
