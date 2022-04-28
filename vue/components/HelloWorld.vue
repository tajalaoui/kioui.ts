<script setup lang="ts">
import { ref } from "vue"
import axios from "axios"
import { API } from "../services/API.ts"

defineProps<{ msg: string }>()
const count = ref(0)

const id = ref()
const user = ref()

const getUser = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/user`, { params: { id: id.value } })
    user.value = response.data.username
    // const response = await API().get("/user", { params: { id: id.value } })
    // user.value = response.data.username
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <!--  -->
  <input v-model="id" type="text" />
  <button @click="getUser" type="submit">Submit</button>
  <h1>{{ user }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
