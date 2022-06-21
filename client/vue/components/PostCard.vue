<script setup lang="ts">
import { computed, ref, nextTick } from "vue"
import type { Ref } from "vue"
import { useUserStore } from "../store/user.store"
import moment from "moment"
import { commentService, likeService } from "../services/post.service"

const userStore = useUserStore()

interface IPostProps {
  _id: string
  user: { username: string }
  content: string
  createdAt: string
}

const emit = defineEmits(["inputBlurAutofocus"])
const props = defineProps<{ post: IPostProps }>()

const postCharLimit: Ref<number> = ref(211)

const getCurrentDate = computed(() => {
  const date = new Date(props.post.createdAt)
  return moment(date, "YYYYMMDD").fromNow()
})

let comment = ref("")
let comments = ref([])
const userId = userStore.$state.id
const postId = props.post._id

async function postComment() {
  // TODO nested document
  const commentBlueprint: string = { userId, postId, comment: comment.value }
  const commentData = await commentService(commentBlueprint)
  comments.push(commentData)
}

async function postLike() {
  // TODO Send http request to check if current user like the current post if not then increment like count by one
  let isLiked = ref(false)
  const likeBlueprint: string = { userId, postId }
  const commentData = await likeService(likeBlueprint)
}

const isShowTextArea: Ref<boolean> = ref(false)
let isViewMore: Ref<boolean> = ref(false)

function viewMore() {
  isViewMore.value = !isViewMore.value
}

const textarea = ref(null)

async function toggleAutoFocus() {
  emit("inputBlurAutofocus")
  isShowTextArea.value = !isShowTextArea.value
  await nextTick()
  textarea.value.focus()
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
        <a class="card-footer-item" @click="postLike"
          ><span class="material-icons">thumb_up</span></a
        >
        <a class="card-footer-item" @click="toggleAutoFocus"
          ><span class="material-icons">comment</span></a
        >
      </footer>
    </div>
    <!-- Comment section -->
    <form @submit.prevent="postComment" v-if="isShowTextArea">
      <textarea
        class="textarea my-5"
        ref="textarea"
        v-model="comment"
        id="textarea"
        placeholder="Enter your comment"
      ></textarea>
      <button class="button is-primary is-fullwidth" type="submit">Submit</button>
    </form>
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
