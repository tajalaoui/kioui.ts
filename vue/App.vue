<script setup lang="ts">
import { useRouter } from "vue-router"
import { useAuthStore } from "./store/auth"

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push("/login")
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/test">Live chat</router-link> -->
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <button @click="logout">Logout</button>
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
