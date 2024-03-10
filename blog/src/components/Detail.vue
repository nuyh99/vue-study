<template>
  <div class="mt-5">
    <h1>{{ posts[$route.params.id].title }}</h1>
    <p>{{ posts[$route.params.id].date }}</p>
    <p class="mt-5">{{ posts[$route.params.id].content }}</p>
    <button type="button" class="btn btn-primary btn-lg position-absolute end-0 mt-4" @click="$router.go(-1)">뒤로가기
    </button>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>

<style lang="scss" scoped>

</style>