import { createRouter, createWebHashHistory } from 'vue-router'
import List from '@/components/List.vue'
import Home from '@/components/Home.vue'
import Detail from '@/components/Detail.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: List
  },
  {
    path: '/posts/:id',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router