<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"
import moment from "moment"

interface IPostProps {
  id: string
  user: { username: string }
  content: string
  createdAt: string
}

defineProps<{ post: IPostProps }>()

const isTextArea: Ref<boolean> = ref(false)
let isViewMore: Ref<boolean> = ref(false)
const postCharLimit: Ref<number> = ref(211)

function viewMore() {
  isViewMore.value = !isViewMore.value
}
</script>

<template>
  <div>
    <div class="card my-5">
      <div class="card-content">
        <p class="title has-text-left" :class="{ postContent: !isViewMore }">
          {{ post.content }}
        </p>
        <p
          v-html="isViewMore ? 'view less' : 'view more'"
          text
          @click="viewMore"
          class="has-text-primary view-more"
          v-show="post.content.length >= postCharLimit"
        ></p>
        <p class="subtitle has-text-left">
          Posted by <span class="has-text-primary">{{ post.user.username }}</span> at
          {{ moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a") }}
        </p>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" href="#"><span class="material-icons">thumb_up</span></a>
        <a class="card-footer-item" @click="isTextArea = !isTextArea"
          ><span class="material-icons">comment</span></a
        >
      </footer>
    </div>
    <textarea
      v-if="isTextArea"
      :key="post.id"
      class="textarea my-5"
      placeholder="Enter your comment"
      autofocus
    ></textarea>
  </div>
</template>

<style>
.postContent {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 3s;
}

.view-more:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
