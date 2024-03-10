<template>
  <div v-for="(post, i) in posts" :key="post" @click="$router.push('/posts/'+i)">
    <h5>{{ post.title }}</h5>
    <p>{{ post.date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>

<style scoped>

</style>