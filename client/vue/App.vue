<script setup lang="ts">
import { useRouter } from "vue-router"
import { logout } from "./composables/auth.composable"

const router = useRouter()

function onLogout() {
  logout()
  router.push({ name: "Login" })
}
</script>

<template>
  <nav class="navbar-end">
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <a @click="onLogout">Logout</a>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

html {
  scroll-behavior: smooth;
}

/* route transition */
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Audiowide", cursive;
}

input {
  width: 30% !important;
  margin: 0 5px;
}

nav {
  margin-bottom: 7%;
}

a {
  color: #000000;
  margin: 0 1%;
}
</style>
