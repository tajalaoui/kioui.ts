<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getPostService } from "../services/post.service"
import PostCard from "../components/PostCard.vue"
import { getToken } from "../composables/token.composable"
import axios from "../services/axios"

const posts = ref()

onMounted(async () => {
  const response = await getPostService()
  posts.value = response.data
})
</script>

<template>
  <div v-for="post in posts">
    <PostCard :key="post._id" :post="post" />
  </div>
</template>
