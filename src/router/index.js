import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/views/HomeView.vue'
import ProductsView from '../modules/products/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      components: {
        default: HomeView
      }
    },
    {
      path: '/products',
      name: 'Products',
      components: {
        default: ProductsView
      }
    }
  ]
})

export default router
