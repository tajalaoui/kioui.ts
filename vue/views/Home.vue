<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getPostsService } from "../services/post.service"

let posts = ref()

onMounted(async () => {
  const response = await getPosts()
  posts.value = response
})

console.log(posts.value)

async function getPosts() {
  try {
    await getPostsService()
  } catch (e) {
    console.log(e)
  }
}
</script>
