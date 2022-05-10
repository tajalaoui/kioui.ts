<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from 'vue'
import { getUserService } from "../services/user.service"

const id = ref()
// const user: Ref<string> = ref("")
const user = ref()

async function getUser() {
  try {
    const response = await getUserService(id.value)
    user.value = response.data
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <form @submit.prevent="getUser">
    <input v-model="id" type="text" />
    <button type="submit">Submit</button>
  </form>

  <h1>{{ user }}</h1>
</template>
