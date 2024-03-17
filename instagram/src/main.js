import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import store from '@/data/store.js'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter

app.use(router).use(store).mount('#app')
