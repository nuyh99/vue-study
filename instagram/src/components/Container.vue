<template>
  <div>
    <div v-if="step===0">
      <Post :post="post" v-for="post in posts" :key="post" />
    </div>

    <div v-if="step===1">
      <div class="upload-image" :class="filter" :style="`background-image: url(${imageUrl})`"></div>
      <div class="filters">
        <FilterBox :image-url="imageUrl" :filter=filter v-for="filter in filters" :key="filter">
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <div v-if="step===2">
      <div class="upload-image" :class="filter" :style="`background-image: url(${imageUrl})`"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
      </div>
    </div>

    <div v-if="step===3">
      <MyPage />
    </div>

  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import FilterBox from '@/components/FilterBox.vue'
import MyPage from '@/components/MyPage.vue'

export default {
  components: { MyPage, FilterBox, Post },
  props: {
    posts: Array,
    imageUrl: String,
    step: Number,
    filter: String
  },
  data() {
    return {
      filters: ['aden', '_1977', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'gingham', 'hudson',
        'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua',
        'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2']
    }
  }
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}

</style>