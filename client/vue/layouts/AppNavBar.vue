<script setup lang="ts">
import { useRouter } from "vue-router"
import { logout } from "../composables/auth.composable"

const router = useRouter()

function onLogout() {
  logout()
  router.push({ name: "Login" })
}
</script>

<template>
  <nav class="navbar-end">
    <router-link to="/">Home</router-link>
    <a @click="onLogout">Logout</a>
  </nav>
</template>
