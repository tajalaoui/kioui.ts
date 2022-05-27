<script setup lang="ts">
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { logout } from "./composables/auth.composable"
import { isToken, setToken } from "./composables/token.composable"
import axios from "./services/axios"

const router = useRouter()

onMounted(() => {
  // const token = isToken()

  // if (!token)

  // if (isTokenValid) setToken(token)
})

function onLogout() {
  logout()
  router.push("/login")
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/test">Live chat</router-link> -->
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <button @click="onLogout">Logout</button>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 5%;
}

a {
  margin: 0 1%;
}
</style>
