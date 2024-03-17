<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step=2" v-if="step===1">Next</li>
      <li @click="publish" v-if="step===2">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :posts="posts" :filter="filter" :step="step" :image-url="imageUrl" @write="content=$event" />

  <div class="footer">
    <ul class="footer-button-plus" v-if="step===0">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from '@/components/Container.vue'
import posts from '@/data/posts.json'
import { mapState } from 'vuex'

export default {
  components: { Container },
  data() {
    return {
      posts: posts,
      step: 3,
      imageUrl: '',
      content: '',
      filter: '',
      counter: 0
    }
  },
  computed: {
    ...mapState(['name'])
  },
  mounted() {
    this.emitter.on('filter', filter => {
      this.filter = filter
    })
  },
  methods: {
    now() {
      return new Date()
    },
    upload(e) {
      const files = e.target.files
      const fileUrl = URL.createObjectURL(files[0])

      this.step = 1
      this.imageUrl = fileUrl
    },
    publish() {
      const post = {
        name: 'Kim Hyun',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.imageUrl,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.content,
        filter: this.filter
      }
      this.posts.unshift(post)
      this.filter = ''
      this.imageUrl = ''
      this.step = 0
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>