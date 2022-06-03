<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getPostService } from "../services/post.service"
import PostCard from "../components/PostCard.vue"

const posts = ref()
onMounted(async () => {
  const response = await getPostService()
  posts.value = response.data
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content" v-for="post in posts">
        <PostCard :key="post._id" :post="post" />
      </div>
    </div>
  </div>
</template>
