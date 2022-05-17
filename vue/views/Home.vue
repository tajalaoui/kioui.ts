<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getPostsService } from "../services/post.service"
import PostCard from "../components/PostCard.vue"

const posts = ref()

onMounted(async () => {
  const response = await getPostsService()
  posts.value = response.data
})
</script>

<template>
  <div v-for="post in posts">
    <PostCard :key="post._id" :post="post" />
  </div>
</template>
