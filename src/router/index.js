import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductListPage from '../pages/ProductListPage.vue' // <-- Добавили

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { 
    path: '/products', 
    name: 'Products', 
    component: ProductListPage, // <-- Добавили
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router