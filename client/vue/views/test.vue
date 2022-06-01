<script setup>
import { ref, watch, reactive, onBeforeMount, onMounted } from "vue"
import socket_io from "socket.io-client"

let username = ref()
let messages = reactive([])
let message = ref()
let state = ref(0)

function sendMessage() {
  socket.emit("message", this.message)
  this.message = ""
}
function setUsername() {
  socket.emit("join", this.username)
  this.username = ""
  this.state = 1
}
function continueWithoutUsername() {
  socket.emit("join", null)
  this.state = 1
}

onBeforeMount(() => {
  // const socket = socket_io.io("http://localhost:3000")
})
onMounted(() => {
  socket.on("message", function (message) {
    app.messages.push(message)

    app.$nextTick(function () {
      var messageBox = document.getElementById("chatbox")
      messageBox.scrollTop = messageBox.scrollHeight
    })
  })
})
</script>

<template>
  <div v-if="state == 0">
    <h3>Welcome! Please choose a username</h3>
    <form @submit.prevent="setUsername">
      <input type="text" placeholder="Username..." :value="username" />
      <input type="submit" value="Join" />
    </form>
    <button @click="continueWithoutUsername">Join as a Guest</button>
  </div>
  <div v-if="state == 1">
    <ul id="chatbox">
      <li v-for="message in messages">
        <b>{{ message.user }}:</b> {{ message.message }}
      </li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input type="text" placeholder="Message..." :value="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<style>
#chatbox {
  height: 200px;
  max-width: 400px;
  overflow-y: scroll;
}
</style>
