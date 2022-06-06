<script setup lang="ts">
const props = defineProps<{ post: Object }>()
</script>

<template>
  <div class="card">
    <div class="card-content">
      <p class="title">{{ props.post.content }}</p>
      <p class="subtitle">{{ props.post.user.username }}</p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item"><a href="#">Like</a></p>
      <p class="card-footer-item"><a href="#">Comment</a></p>
    </footer>
  </div>
</template>
