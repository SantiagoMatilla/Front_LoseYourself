import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      components: {
        default: HomeView
      }
    }
  ]
})

export default router
