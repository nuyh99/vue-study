<template>
  <div v-for="(room, i) in rooms" :key="i">
    <img :src="room.image" alt="" class="room-img">
    <h4 @click="$emit('openModal', i)">{{ room.title }}</h4>
    <p>{{ room.price }}원</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    rooms: Array,
    isOpened: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>