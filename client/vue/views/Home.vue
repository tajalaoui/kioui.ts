<script setup lang="ts">
import { onMounted, ref } from "vue"
import PostCard from "../components/PostCard.vue"
import { createPostService, getPostService } from "../services/post.service"
import { useUserStore } from "../store/user.store"

onMounted(async () => {
  const response = await getPostService()
  posts.value = response.data
})

const userStore = useUserStore()
const posts = ref()
const isCreatePost = ref(false)

const postContent = ref("")

async function createPost() {
  try {
    const data = { id: userStore.id, content: postContent.value }
    // await createPostService(data)
    const post = await createPostService(data)
    posts.value.push(post)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="is-inline-block add-post my-3">
    <span class="material-icons has-text-primary" @click="isCreatePost = !isCreatePost">
      post_add
    </span>
  </div>

  <div v-if="isCreatePost" class="my-5">
    <form @submit.prevent="createPost">
      <textarea v-model="postContent" class="textarea" autofocus></textarea>
      <button class="button mt-3" type="submit">Submit</button>
    </form>
  </div>

  <div class="card">
    <div class="card-content">
      <PostCard class="content py-3" v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </div>
</template>

<style>
.add-post:hover {
  cursor: pointer;
}
</style>
