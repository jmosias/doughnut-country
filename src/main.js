import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import './assets/tailwind.css'

createApp(App).use(store).use(router).use(VueSmoothScroll, { updateHistory: false }).mount('#app')
