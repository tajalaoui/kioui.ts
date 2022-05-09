<script setup lang="ts">
import Home from "./views/Home.vue"
</script>

<template>
  <!-- <Home msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/test">Live chat</router-link>
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
