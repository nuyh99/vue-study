<template>
  <div class="black-bg" v-if="isOpened">
    <div class="white-bg">
      <h4>{{ rooms[clickedIndex].title }}</h4>
      <p>{{ rooms[clickedIndex].content }}</p>
      <input v-model="month">
      <p>{{ month }}개월 가격: {{ rooms[clickedIndex].price * month }} 원</p>

      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  data() {
    return {
      month: 3
    }
  },
  beforeUpdate() {
    if (this.month < 3) {
      alert('2개월 이상만 가능');
    }
  },
  updated() {
    if (this.month < 3) {
      this.month = 3;
    }
  },
  props: {
    rooms: Array,
    clickedIndex: Number,
    isOpened: Boolean,
  },
}
</script>

<style scoped>

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-right: 8px;
}

</style>