<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"
import { createUserService } from "../services/user.service"
import { IUser } from "../../interfaces/models/IUser"

const user: Ref<IUser> = ref({ username: "", email: "", password: "" })

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
    <input v-model="user.username" type="text" />
    <input v-model="user.email" type="text" />
    <input v-model="user.password" type="text" />
    <button type="submit">Submit</button>
  </form>
</template>
