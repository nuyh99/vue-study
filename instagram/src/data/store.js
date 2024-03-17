import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore(
  {
    state() {
      return {
        likes: 30,
        clicked: false,
        more: {},
        name: 'hahaha'
      }
    },

    mutations: {
      like(state) {
        if (!state.clicked) {
          state.likes++
          state.clicked = true
        } else {
          state.likes--
          state.clicked = false
        }
      },
      setMore(state, data) {
        state.more = data
      }
    },

    actions: {
      getData(context) {
        axios.get('https://codingapple1.github.io/vue/more0.json').then(res => {
          context.commit('setMore', res.data)
        })
      }
    }
  }
)

export default store
