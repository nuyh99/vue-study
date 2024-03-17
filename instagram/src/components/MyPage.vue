<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search" />
    <div class="post-header" v-for="follower in followers" :key="follower">
      <div class="profile" :style="`background-image: url(${follower.image})`"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let originalFollowers = []
let followers = ref([])

onMounted(() => {
  axios.get('/follower.json')
  .then(res => {
    originalFollowers = [...res.data]
    followers.value = res.data
  })
})

function search(e) {
  const keyword = e.target.value
  followers.value = originalFollowers.filter(follower => follower.name.includes(keyword))
}

</script>

<style lang="scss" scoped>

</style>