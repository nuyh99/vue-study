<template>

  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>

  <Discount/>

  <button @click="sortByPrice">가격순 정렬</button>
  <button @click="sortByPriceDesc">가격 역순 정렬</button>
  <button @click="sortByName">가나다순 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Transition name="fade">
    <Modal @closeModal="isOpened=false" :rooms="rooms" :clickedIndex="clickedIndex" :isOpened="isOpened"/>
  </Transition>
  <Card @openModal="isOpened=true; clickedIndex=$event" :rooms="rooms" :clickedIndex="clickedIndex"
        :isOpened="isOpened"/>

</template>

<script>
import data from '@/assets/rooms.js'
import Discount from '@/components/Discount.vue';
import Modal from '@/components/Modal.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'App',
  components: {Card, Modal, Discount},
  methods: {
    sortBack() {
      this.rooms = [...this.roomsOriginal];
    },
    sortByPrice() {
      this.rooms.sort((a, b) => a.price - b.price);
    },
    sortByPriceDesc() {
      this.rooms.sort((a, b) => b.price - a.price);
    },
    sortByName() {
      this.rooms.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  data() {
    return {
      roomsOriginal: [...data],
      menus: ['Home', 'Shop', 'About'],
      rooms: data,
      isOpened: false,
      clickedIndex: 0
    }
  },
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.menu {
  display: flex;
  justify-content: space-around;
  background: darkslateblue;
  padding: 10px;
  color: white;
  border-radius: 5px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
