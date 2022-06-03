<script setup lang="ts">
// Add interface
const props = defineProps<{ post: Object }>()
</script>

<template>
  <div id="postCard">
    <h1>{{ props.post.user.username }}</h1>
    <p>{{ props.post.content }}</p>
  </div>
  <hr />
</template>
