import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import(/* webpackChunkName: "catalogue" */ '../views/Catalogue.vue')
  },
  {
    path: '/our_story',
    name: 'OurStory',
    component: () => import(/* webpackChunkName: "our_story" */ '../views/OurStory.vue')
  },
  {
    path: '/contact_us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact_us" */ '../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
