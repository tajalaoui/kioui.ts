<script setup lang="ts">
// Add interface
const props = defineProps<{ post: Object }>()
</script>

<template>
  <div id="postCard">
    <h1>{{ props.post.content }}</h1>
    <h1>{{ props.post.user.username }}</h1>
  </div>
</template>

<style>
#postCard {
  background: #f0efef;
}
</style>
