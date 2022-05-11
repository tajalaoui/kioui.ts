<script setup lang="ts">
import { reactive, ref } from "vue"
import type { Ref } from "vue"
import { createUserService } from "../services/user.service"

const user = reactive({ username: "", email: "", password: "" })

async function createUser() {
  try {
    await createUserService(user)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="createUser">
    <input v-model="user.username" placeholder="username" type="text" />
    <input v-model="user.email" placeholder="email" type="email" />
    <input v-model="user.password" placeholder="password" type="password" />
    <button type="submit">Submit</button>
  </form>
</template>
