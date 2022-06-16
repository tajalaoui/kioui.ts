<script setup lang="ts">
import { computed, ref, nextTick } from "vue"
import type { Ref } from "vue"
import moment from "moment"

interface IPostProps {
  id: string
  user: { username: string }
  content: string
  createdAt: string
}

const emit = defineEmits(["inputBlurAutofocus"])
const props = defineProps<{ post: IPostProps }>()

const isShowTextArea: Ref<boolean> = ref(false)
let isViewMore: Ref<boolean> = ref(false)
const postCharLimit: Ref<number> = ref(211)

const getCurrentDate = computed(() => {
  const date = new Date(props.post.createdAt)
  return moment(date, "YYYYMMDD").fromNow()
})

function viewMore() {
  isViewMore.value = !isViewMore.value
}

const textarea = ref(null)
let isAutofocus: Ref<boolean> = ref(false)

async function toggleAutoFocus() {
  emit("inputBlurAutofocus")
  isShowTextArea.value = !isShowTextArea.value
  await nextTick()
  document.querySelector(".textarea").setAttribute("autofocus", "")
  // isAutofocus.value = true
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
          Posted by <span class="has-text-primary" id="username">{{ post.user.username }}</span>
          {{ getCurrentDate }}
        </p>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" href="#"><span class="material-icons">thumb_up</span></a>
        <a class="card-footer-item" @click="toggleAutoFocus"
          ><span class="material-icons">comment</span></a
        >
      </footer>
    </div>
    <textarea
      ref="textarea"
      v-if="isShowTextArea"
      :key="post.id"
      class="textarea my-5"
      id="textarea"
      placeholder="Enter your comment"
      :autofocus="isAutofocus"
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

#username:hover {
  cursor: pointer;
}
</style>
